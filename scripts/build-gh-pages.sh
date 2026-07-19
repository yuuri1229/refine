#!/usr/bin/env bash
# GitHub Pages向けの静的書き出しビルド。
# API Route(app/api)はGitHub Pagesで動作しないため、ビルド中だけ一時退避する。
set -euo pipefail
cd "$(dirname "$0")/.."

API_DIR="src/app/api"
API_BACKUP="src/app/_api_disabled_for_static_export"

cleanup() {
  if [ -d "$API_BACKUP" ]; then
    rm -rf "$API_DIR"
    mv "$API_BACKUP" "$API_DIR"
  fi
}
trap cleanup EXIT

if [ -d "$API_DIR" ]; then
  mv "$API_DIR" "$API_BACKUP"
fi

STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH="${NEXT_PUBLIC_BASE_PATH:-}" npx next build

echo "Static export complete: ./out"
