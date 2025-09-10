#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
TARGET_DIR="$ROOT_DIR/httpdocs"

npm --prefix "$FRONTEND_DIR" ci
npm --prefix "$FRONTEND_DIR" run build

rm -rf "$TARGET_DIR"/*
cp -r "$FRONTEND_DIR/dist"/* "$TARGET_DIR/"
