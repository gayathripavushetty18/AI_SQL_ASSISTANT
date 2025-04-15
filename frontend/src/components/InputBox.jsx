export default function InputBox({ query, setQuery, onSubmit }) {
    return (
      <div>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-32 border p-2 rounded"
          placeholder="Enter your query in plain English"
        />
        <button onClick={onSubmit} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Generate SQL
        </button>
      </div>
    );
  }
  