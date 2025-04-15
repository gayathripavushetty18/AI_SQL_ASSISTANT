# utils/sql_generator.py

def generate_sql(natural_lang_query):
    if "users" in natural_lang_query.lower():
        return "SELECT * FROM users;"
    return "SELECT * FROM dummy_table;"