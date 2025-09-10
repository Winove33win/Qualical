import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import healthRouter from './routes/health.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Rotas API
app.use('/api/health', healthRouter);

// Servir frontend build (Vite) a partir de /public
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// SPA fallback: manda tudo pro index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

export default app;
