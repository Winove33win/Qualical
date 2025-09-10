import { useEffect, useState } from 'react';
import { health } from './lib/api';

export default function App() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    health().then(setStatus).catch(err => setStatus({ ok: false, error: err.message }));
  }, []);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">Novo Projeto</h1>
        <pre className="text-sm mt-4">{JSON.stringify(status, null, 2)}</pre>
      </div>
    </div>
  );
}
