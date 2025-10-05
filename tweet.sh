#!/bin/bash

# Helper script for using twtxt with the local configuration
# Usage: ./tweet.sh [command] [arguments...]

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/twtxt_config"

# Use Homebrew twtxt (no virtual environment needed)
TWTXT_CMD="/opt/homebrew/bin/twtxt"

# Run twtxt with the local configuration
if [ $# -eq 0 ]; then
    echo "Usage: $0 [twtxt command] [arguments...]"
    echo "Examples:"
    echo "  $0 tweet 'Hello world!'"
    echo "  $0 timeline"
    echo "  $0 following"
    echo "  $0 follow username https://example.com/twtxt.txt"
    echo "  $0 view https://example.com/twtxt.txt"
else
    "$TWTXT_CMD" -c "$CONFIG_FILE" "$@"
    
    # If this was a tweet command, push changes to GitHub
    if [ "$1" = "tweet" ]; then
        echo "Pushing changes to GitHub..."
        cd "$SCRIPT_DIR"
        git add twtxt.txt
        git commit -m "New tweet: $(echo "$2" | cut -c1-50)..."
        git push
    fi
fi