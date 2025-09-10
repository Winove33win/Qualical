#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
BACKEND_DIR="$ROOT_DIR/httpdocs/backend"

# Build frontend
npm --prefix "$FRONTEND_DIR" run build

# If frontend/dist exists, sync it to backend/public
if [ -d "$FRONTEND_DIR/dist" ]; then
  rm -rf "$BACKEND_DIR/public"
  cp -r "$FRONTEND_DIR/dist" "$BACKEND_DIR/public"
fi

# Generate sitemaps
npm --prefix "$BACKEND_DIR" run sitemap
