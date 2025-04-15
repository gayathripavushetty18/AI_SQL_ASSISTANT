export default function ResultsTable({ data }) {
    if (!data.length) return null;
    return (
      <table className="w-full border mt-4">
        <thead>
          <tr>
            {data[0].map((_, idx) => <th key={idx} className="border p-2">Column {idx + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j} className="border p-2">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  