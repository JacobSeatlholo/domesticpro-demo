#!/usr/bin/env bash
# push-to-github.sh
# Helper script to push the Domestic Pro Service demo to a new GitHub repo.
#
# Usage:
#   1) Make sure you're logged into GitHub (either via `gh auth login`
#      or with an SSH key set up on your GitHub account).
#   2) Edit REPO_NAME / REPO_DESC below if you want a different name.
#   3) Run: bash scripts/push-to-github.sh
#
# This script will:
#   - create a new public GitHub repo under your account (if gh CLI is logged in)
#   - add it as the `origin` remote
#   - push the `main` branch

set -euo pipefail

REPO_NAME="${REPO_NAME:-domestic-pro-ai-matcher-demo}"
REPO_DESC="Domestic Pro Service — AI Job Matcher demo (Eco-Friendly & Pet-Safe Cleaning, Cape Town Northern Suburbs). Built by BusinessHustle."
VISIBILITY="${VISIBILITY:-public}"   # public | private
REMOTE_URL="${REMOTE_URL:-}"          # set this to skip `gh repo create`

# Resolve repo path
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

echo ">> Working in: $PROJECT_DIR"
echo ">> Repo name : $REPO_NAME"
echo ">> Visibility: $VISIBILITY"
echo

# Sanity: must be a git repo with at least one commit on main
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "!! Not a git repo. Aborting." >&2
  exit 1
fi
if ! git rev-parse --verify main >/dev/null 2>&1; then
  echo "!! No 'main' branch. Aborting." >&2
  exit 1
fi

# 1) Resolve the remote URL
if [[ -n "$REMOTE_URL" ]]; then
  echo ">> Using provided REMOTE_URL=$REMOTE_URL"
elif command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  echo ">> gh CLI is authenticated — creating repo '$REPO_NAME' ($VISIBILITY)…"
  REMOTE_URL="$(gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --description "$REPO_DESC" --push 2>/dev/null \
    | grep -oE 'git@github.com:[^ ]+\.git' | head -1 || true)"
  # gh may have already added the remote + pushed; check
  if git remote get-url origin >/dev/null 2>&1; then
    echo ">> Remote 'origin' is set: $(git remote get-url origin)"
    if git ls-remote --exit-code --heads origin main >/dev/null 2>&1; then
      echo ">> main already pushed. Done."
      exit 0
    fi
  fi
  if [[ -z "$REMOTE_URL" ]]; then
    echo "!! gh did not return a remote URL. Falling back to manual mode." >&2
  fi
fi

if [[ -z "$REMOTE_URL" ]]; then
  echo
  echo "!! Could not auto-resolve a remote URL." >&2
  echo
  echo "   Please do ONE of the following, then re-run this script:"
  echo
  echo "   Option A — install & login with gh CLI:"
  echo "     sudo apt install gh                # or: brew install gh"
  echo "     gh auth login"
  echo "     bash scripts/push-to-github.sh"
  echo
  echo "   Option B — create the empty repo on github.com first, then:"
  echo "     REMOTE_URL=git@github.com:YOUR_USER/$REPO_NAME.git bash scripts/push-to-github.sh"
  echo "     # (or use the HTTPS URL if you prefer)"
  echo
  exit 1
fi

# 2) Add remote (idempotent)
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi
echo ">> origin -> $(git remote get-url origin)"

# 3) Push
echo ">> Pushing main…"
git push -u origin main

echo
echo "Done. Your demo is live on GitHub."
echo "  Clone URL: $REMOTE_URL"
