#!/usr/bin/env bash
set -euo pipefail

BRANCH="${1:-main}"
REMOTE="${2:-origin}"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT_DIR"
LOCAL_HASH=$(git rev-parse "$BRANCH")
REMOTE_HASH=$(git ls-remote "$REMOTE" "$BRANCH" | awk '{print $1}')

if [ "$LOCAL_HASH" != "$REMOTE_HASH" ]; then
  git pull --ff-only "$REMOTE" "$BRANCH"
  "$ROOT_DIR/deploy/deploy.sh"
fi
