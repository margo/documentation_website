#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/margo/general_website_content.git"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CACHE_DIR="$ROOT_DIR/.cache/general_website_content"

if [ -d "$CACHE_DIR/.git" ]; then
  git -C "$CACHE_DIR" fetch --depth 1 origin main
  git -C "$CACHE_DIR" reset --hard origin/main
else
  rm -rf "$CACHE_DIR"
  git clone --depth 1 "$REPO_URL" "$CACHE_DIR"
fi

mkdir -p "$ROOT_DIR/content/docs"
rsync -a --delete --exclude ".git" "$CACHE_DIR/" "$ROOT_DIR/content/docs/"


