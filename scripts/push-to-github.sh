#!/usr/bin/env bash
# push-to-github.sh
# Pushes the Domestic Pro Service demo to
# git@github.com:JacobSeatlholo/domesticpro-demo.git
#
# Uses a custom SSH transport (node + ssh2) because the sandbox has no
# `ssh` binary. You MUST first add the deploy key (printed below) to the
# GitHub repo as a deploy key with WRITE access:
#
#   1. Open https://github.com/JacobSeatlholo/domesticpro-demo/settings/keys
#   2. Click "Add deploy key"
#   3. Title: "domesticpro-demo-deploy"
#   4. Key (paste):
# ----------------------------------------------------------------------
#   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJoaPPjUvvN9cmEBfTl3dPZQjSwuKcOMqrcR/rmTY3gp domesticpro-demo-deploy
# ----------------------------------------------------------------------
#   5. Tick "Allow write access" → click "Add key"
#
#   6. Re-run:  bash scripts/push-to-github.sh
#
# If you don't have the sandbox running, the simpler way from a normal
# machine is:
#
#   cd /path/to/domesticpro-demo
#   git remote add origin git@github.com:JacobSeatlholo/domesticpro-demo.git
#   git push -u origin main
#
# (using your own machine's SSH key that's already on your GitHub account)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

REMOTE_URL="git@github.com:JacobSeatlholo/domesticpro-demo.git"
SSH_TRANSPORT="${SSH_TRANSPORT:-node /home/z/git-ssh-transport.js}"

# Make sure the remote is set
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi
echo ">> origin -> $(git remote get-url origin)"

# Try pushing using the custom SSH transport
echo ">> Pushing main…"
echo ">> (uses custom SSH transport: $SSH_TRANSPORT)"
echo ">> If this fails with 'All configured authentication methods failed',"
echo ">> add the deploy key above to your GitHub repo settings, then re-run."
echo ""
GIT_SSH_COMMAND="$SSH_TRANSPORT -o StrictHostKeyChecking=no" \
  git push -u origin main

echo ""
echo "✓ Done. Your demo is live on GitHub."
echo "  https://github.com/JacobSeatlholo/domesticpro-demo"
