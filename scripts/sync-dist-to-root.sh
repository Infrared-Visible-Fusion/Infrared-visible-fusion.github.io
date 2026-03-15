#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="${1:-.}"
REPO_ROOT="$(cd "$REPO_ROOT" && pwd)"
DIST_DIR="$REPO_ROOT/dist"

if [[ ! -d "$DIST_DIR" ]]; then
  echo "dist directory not found: $DIST_DIR" >&2
  exit 1
fi

find "$REPO_ROOT" -mindepth 1 -maxdepth 1 \
  ! -name .git \
  ! -name .github \
  ! -name .gitignore \
  ! -name .npmrc \
  ! -name .nojekyll \
  ! -name .umirc.ts \
  ! -name package.json \
  ! -name package-lock.json \
  ! -name tsconfig.json \
  ! -name typings.d.ts \
  ! -name README.md \
  ! -name CNAME \
  ! -name src \
  ! -name scripts \
  ! -name dist \
  ! -name node_modules \
  -exec rm -rf {} +

cp -R "$DIST_DIR"/. "$REPO_ROOT"/
touch "$REPO_ROOT/.nojekyll"

echo "Synced dist into repo root: $REPO_ROOT"
