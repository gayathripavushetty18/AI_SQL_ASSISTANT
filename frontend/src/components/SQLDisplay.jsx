import MonacoEditor from "react-monaco-editor";

export default function SQLDisplay({ sql, onRun }) {
  return (
    <div>
      <MonacoEditor height="200" language="sql" value={sql} options={{ readOnly: true }} />
      <button onClick={onRun} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Run Query
      </button>
    </div>
  );
}
