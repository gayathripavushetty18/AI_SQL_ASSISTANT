import axios from "axios";

const BASE = "http://localhost:5000";

export const generateSQL = async (query) => {
  const res = await axios.post(`${BASE}/generate_sql`, { query });
  return res.data;
};

export const runSQL = async (sql) => {
  const res = await axios.post(`${BASE}/run_query`, { sql });
  return res.data;
};
