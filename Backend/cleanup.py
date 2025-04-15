with open("utils/sql_generator.py", "rb") as f:
    content = f.read().replace(b"\x00", b"")

with open("utils/sql_generator.py", "wb") as f:
    f.write(content)

print("File cleaned successfully!")