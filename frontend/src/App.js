import React, { useState } from 'react';
import InputBox from './components/InputBox';
import SQLDisplay from './components/SQLDisplay';
import ResultsTable from './components/ResultsTable';
import { generateSQL, runSQL } from './api';

export default function App() {
  const [query, setQuery] = useState('');
  const [sql, setSQL] = useState('');
  const [result, setResult] = useState([]);

  const handleGenerate = async () => {
    const response = await generateSQL(query);
    setSQL(response.sql);
  };

  const handleRun = async () => {
    const response = await runSQL(sql);
    setResult(response.result);
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">AI SQL Assistant</h1>
      <InputBox query={query} setQuery={setQuery} onSubmit={handleGenerate} />
      <SQLDisplay sql={sql} onRun={handleRun} />
      <ResultsTable data={result} />
    </main>
  );
}
