# Novo Projeto

Base full-stack com **Express** + **MySQL** e **React** + **Vite** + **Tailwind** + **Shadcn**.

## Desenvolvimento

```bash
# Backend
cd httpdocs/backend
npm ci
npm run dev

# Frontend
cd frontend
npm ci
npm run dev
# Build para produção
npm run build  # gera arquivos estáticos em ../httpdocs/backend/public
```

Acesse http://localhost:3333/api/health para checar a API e banco de dados.
O build do frontend é servido a partir de `httpdocs/backend/public`.

Deploy é realizado via GitHub Actions (CI/CD) enviando arquivos via FTP para o Plesk.
