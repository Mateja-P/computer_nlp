from flask import Flask, jsonify,request
from flask_cors import CORS
import json

import openai
import pandas as pd
import numpy as np
import tiktoken

app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET', 'POST'])

def return_home():
    COMPLETIONS_MODEL = "text-davinci-003"
    openai.api_key = "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"
    prompt = "Answer the question as truthfully as possible, and if you're unsure of the answer, say 'Zbog malog broja podataka nemam odgovor'."

    # df = pd.read_csv('https://raw.githubusercontent.com/DAR-DatenanalyseRehberg/import/main/QatarWorldCup.csv')
    df = pd.read_csv('pages/api/computer_problems.csv')
    df = df.set_index(["title", "heading"])
    df.sample(5)

    l = list(request.form)[0]
    question = json.loads(l)['question']

    EMBEDDING_MODEL = "text-embedding-ada-002"
    def get_embedding(text: str, model: str=EMBEDDING_MODEL):
        result = openai.Embedding.create(
        model=model,
        input=text
        )
        return result["data"][0]["embedding"]

    def compute_doc_embeddings(df):
        return {
            idx: get_embedding(r.content) for idx, r in df.iterrows()
        }

    document_embeddings = compute_doc_embeddings(df)

    def vector_similarity(x,y):
        return np.dot(np.array(x), np.array(y))

    def order_document_sections_by_query_similarity(query,contexts):
        query_embedding = get_embedding(query)
        document_similarities = sorted([
            (vector_similarity(query_embedding, doc_embedding), doc_index) for doc_index, doc_embedding in contexts.items()
        ], reverse=True)
        return document_similarities

    MAX_SECTION_LEN = 500
    SEPARATOR = "\n* "
    ENCODING = "cl100k_base"  # encoding for text-embedding-ada-002
    encoding = tiktoken.get_encoding(ENCODING)
    separator_len = len(encoding.encode(SEPARATOR))

    def construct_prompt(question: str, context_embeddings: dict, df: pd.DataFrame) -> str:
        most_relevant_document_sections = order_document_sections_by_query_similarity(question, context_embeddings)
        chosen_sections = []
        chosen_sections_len = 0
        chosen_sections_indexes = []

        for _, section_index in most_relevant_document_sections:
            document_section = df.loc[section_index]  # Add contexts until we run out of space.

            chosen_sections_len += document_section.tokens + separator_len
            if chosen_sections_len > MAX_SECTION_LEN:
                break

            chosen_sections.append(SEPARATOR + document_section.content.replace("\n", " "))
            chosen_sections_indexes.append(str(section_index))

        header = """Answer the question as truthfully as possible using the provided context, and if the answer is not contained within the text below, say "Zbog malog broja podataka nemam odgovor"\n\nContext:\n"""

        return header + "".join(chosen_sections) + "\n\n Q: " + question + "\n A:"

    COMPLETIONS_API_PARAMS = {
        "temperature": 0.0,
        "max_tokens": 300,
        "model": COMPLETIONS_MODEL,
    }

    def answer_query_with_context(query,df,document_embeddings):
        prompt = construct_prompt(
            query,
            document_embeddings,
            df
        )

        response = openai.Completion.create(
            prompt=prompt,
             **COMPLETIONS_API_PARAMS
            )
        return response["choices"][0]["text"].strip(" \n")

    a = ''

    if question != '':
        a = answer_query_with_context(question, df, document_embeddings)
    else:
        a = 'You must ask a question'

    return a

    openai.Completion.create(
        prompt=prompt,
        temperature=0, # We use temperature of 0.0 because it gives the most predictable, factual answer.
        max_tokens=4056, # This model's maximum context length is 4097 tokens, but 41 already included in prompt
        model=COMPLETIONS_MODEL
    )["choices"][0]["text"].strip(" \n")
                
if __name__ == "__main__":
    app.run(debug=True, port=8080) 