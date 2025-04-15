from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.sql_generator import generate_sql

app = Flask(__name__)
CORS(app)

@app.route("/generate_sql", methods=["POST"])
def generate():
    data = request.get_json()
    user_query = data["query"]
    sql = generate_sql(user_query)
    return jsonify({"sql": sql})

@app.route("/run_query", methods=["POST"])
def run_query():
    data = request.get_json()
    query = data["sql"]
    # Here you would run the query on a mock or test DB
    return jsonify({"result": [["John", "2024-12-01"], ["Mary", "2024-12-02"]]})

if __name__ == "__main__":
    app.run(debug=True)
