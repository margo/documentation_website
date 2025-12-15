#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/margo/general_website_content.git"
REPO_BRANCH="pre-draft"
SPEC_REPO_URL="https://github.com/margo/specification.git"
SPEC_BRANCH="pre-draft"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CACHE_DIR="$ROOT_DIR/.cache/general_website_content"
SPEC_CACHE_DIR="$ROOT_DIR/.cache/specification"

rm -rf "$CACHE_DIR"
git clone --depth 1 --branch "$REPO_BRANCH" "$REPO_URL" "$CACHE_DIR"

mkdir -p "$ROOT_DIR/content/docs"
rsync -a --delete --exclude ".git" "$CACHE_DIR/system-design/" "$ROOT_DIR/content/docs/"

rm -rf "$SPEC_CACHE_DIR"
git clone --depth 1 --branch "$SPEC_BRANCH" "$SPEC_REPO_URL" "$SPEC_CACHE_DIR"

mkdir -p "$ROOT_DIR/content/docs/specification"
rsync -a --delete --exclude ".git" "$SPEC_CACHE_DIR/system-design/specification/" "$ROOT_DIR/content/docs/specification/"
# echo '{"title": "API Reference"}' > "$ROOT_DIR/content/docs/specification/meta.json"

# Move figures folders from repos to public/figures
mkdir -p "$ROOT_DIR/public/figures"
if [ -d "$CACHE_DIR/system-design/figures" ]; then
  rsync -a "$CACHE_DIR/system-design/figures/" "$ROOT_DIR/public/figures/"
fi
if [ -d "$SPEC_CACHE_DIR/system-design/specification/figures" ]; then
  rsync -a "$SPEC_CACHE_DIR/system-design/specification/figures/" "$ROOT_DIR/public/figures/"
fi

# Remove figures folders from docs directory
rm -rf "$ROOT_DIR/content/docs/figures"
rm -rf "$ROOT_DIR/content/docs/specification/figures"

# Fix invalid 'https' language in code blocks
if [[ "$OSTYPE" == "darwin"* ]]; then
  find "$ROOT_DIR/content/docs" -type f -name "*.md" -exec sed -i '' 's/^```https/```text/g' {} +
else
  find "$ROOT_DIR/content/docs" -type f -name "*.md" -exec sed -i 's/^```https/```text/g' {} +
fi

# Process extracted markdown files to add title to frontmatter and remove it from content
echo "Processing markdown titles..."
find "$ROOT_DIR/content/docs" -type f -name "*.md" | while read -r file; do
  # Extract first H1 (lines starting with '# ')
  h1_line=$(grep -m 1 "^# " "$file" || true)

  if [ -n "$h1_line" ]; then
    # Clean the title: remove '#', trim whitespace
    title=$(echo "$h1_line" | sed 's/^# *//' | xargs)
    # Escape quotes for YAML
    safe_title=$(echo "$title" | sed 's/"/\\"/g')

    if [ -n "$title" ]; then
      temp_file=$(mktemp)
      # Check if file has frontmatter (starts with ---)
      if [ "$(head -n 1 "$file")" = "---" ]; then
        # Use awk to update (or add) title in existing frontmatter AND remove the H1 line
        awk -v title="$safe_title" '
          BEGIN { in_fm = 0; title_set = 0; fm_done = 0; h1_removed = 0; }
          NR == 1 && /^---$/ { in_fm = 1; print; next; }
          /^---$/ {
            if (in_fm && !fm_done) {
              if (!title_set) { print "title: \"" title "\""; }
              in_fm = 0;
              fm_done = 1;
            }
            print; next;
          }
          in_fm {
            if (/^title:/) {
              print "title: \"" title "\"";
              title_set = 1;
              next;
            }
            print; next;
          }
          # After frontmatter, remove the first occurrence of H1
          !in_fm && fm_done && !h1_removed && /^# / {
            h1_removed = 1;
            next;
          }
          { print }
        ' "$file" > "$temp_file" && mv "$temp_file" "$file"
      else
        # No frontmatter: Create it and remove the H1 line
        awk -v title="$safe_title" '
          BEGIN { h1_removed = 0; print "---"; print "title: \"" title "\""; print "---"; }
          !h1_removed && /^# / {
             h1_removed = 1;
             next;
          }
          { print }
        ' "$file" > "$temp_file" && mv "$temp_file" "$file"
      fi
    fi
  fi
done
