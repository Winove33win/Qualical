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

## Deploy

Scripts em `deploy/` auxiliam na publicação:

- `deploy.sh` – compila o frontend, sincroniza com o backend e gera sitemaps.
- `auto-update.sh` – busca novos commits no branch (padrão `main`) e roda `deploy.sh` quando há mudanças.
- `deploy-plesk.sh` – para ambientes Plesk, constrói o frontend e copia o resultado para `httpdocs/`.

Execute `deploy/deploy.sh` manualmente após cada alteração ou agende `deploy/auto-update.sh` em um cron.
Em hospedagens estáticas, utilize `deploy/deploy-plesk.sh`.

No backend (`httpdocs/backend`), os scripts podem ser acionados via npm, por exemplo:

```bash
npm run deploy
```
