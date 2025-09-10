const API_BASE = import.meta.env.VITE_API_URL || '';

export async function health() {
  const res = await fetch(`${API_BASE}/api/health`);
  return res.json();
}
