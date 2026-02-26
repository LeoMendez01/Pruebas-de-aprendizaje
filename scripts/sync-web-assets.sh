#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEST_DIR="$ROOT_DIR/android/app/src/main/assets/www"

mkdir -p "$DEST_DIR/icons"
cp "$ROOT_DIR/index.html" "$DEST_DIR/index.html"
cp "$ROOT_DIR/styles.css" "$DEST_DIR/styles.css"
cp "$ROOT_DIR/app.js" "$DEST_DIR/app.js"
cp "$ROOT_DIR/manifest.webmanifest" "$DEST_DIR/manifest.webmanifest"
cp "$ROOT_DIR/service-worker.js" "$DEST_DIR/service-worker.js"
cp "$ROOT_DIR/icons/icon-192.svg" "$DEST_DIR/icons/icon-192.svg"
cp "$ROOT_DIR/icons/icon-512.svg" "$DEST_DIR/icons/icon-512.svg"

echo "Assets sincronizados en $DEST_DIR"
