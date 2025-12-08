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

for dir in concepts overview personas-definitions how-to-contribute; do
  mkdir -p "$ROOT_DIR/content/docs/$dir"
  rsync -a --delete "$CACHE_DIR/$dir/" "$ROOT_DIR/content/docs/$dir/"
done

