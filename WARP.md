# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal twtxt feed repository - a decentralized microblogging platform where tweets are stored in a simple text file (`twtxt.txt`) and published via GitHub Pages. The repository includes a Python virtual environment with twtxt installed and a helper script for easy tweeting and timeline management.

## Architecture

- **`twtxt.txt`**: The main feed file containing timestamped tweets in twtxt format
- **`tweet.sh`**: Wrapper script that activates the Python virtual environment, runs twtxt commands, and automatically pushes tweet changes to GitHub
- **`twtxt_config`**: Configuration file containing user settings and following list
- **`index.html`**: Styled web view of the feed for GitHub Pages
- **Requirements**: twtxt installed via Homebrew
- **Feed URL**: `https://raw.githubusercontent.com/mroberts1/twtxt/main/twtxt.txt`

## Common Commands

### Posting and Managing Tweets

```bash
# Post a new tweet (automatically commits and pushes to GitHub)
./tweet.sh tweet "Your message here"

# View your timeline (your tweets and those you follow)
./tweet.sh timeline

# View only your tweets
./tweet.sh view https://raw.githubusercontent.com/mroberts1/twtxt/main/twtxt.txt
```

### Following Management

```bash
# View who you're following
./tweet.sh following

# Follow someone new
./tweet.sh follow username https://example.com/twtxt.txt

# Unfollow someone
./tweet.sh unfollow username
```

### Manual Operations

```bash
# Run twtxt commands directly with local config
twtxt -c twtxt_config [command]

# Manual git operations (if needed)
git add twtxt.txt && git commit -m "New tweet" && git push
```

## Development Setup

The repository uses Homebrew's twtxt installation:

```bash
# Install twtxt via Homebrew
brew install twtxt

# Verify installation
twtxt --version

# Test with local config
twtxt -c twtxt_config following
```

## Configuration Details

The `twtxt_config` file contains:
- **Nick**: `mroberts1` 
- **Feed file**: Points to local `twtxt.txt`
- **Feed URL**: GitHub raw file URL for public access
- **Character limits**: Set to 140 characters (Twitter-style)
- **Following list**: Contains feeds being followed

## File Format

The `twtxt.txt` file uses a simple format:
```
2025-10-05T17:47:57-04:00	Hello World
```

Each line contains an ISO 8601 timestamp, tab character, and the tweet content.

## Git Workflow

The `tweet.sh` script automatically handles git operations when tweeting:
1. Adds the updated `twtxt.txt` to git
2. Commits with message "New tweet: [first 50 chars]..."
3. Pushes to GitHub

For manual changes, standard git workflow applies.

## Web View

The repository includes `index.html` which provides a styled web view of the feed:
- Enable GitHub Pages to make it accessible at `https://username.github.io/twtxt/`
- Automatically fetches and formats tweets from `twtxt.txt`
- Includes instructions for following the feed

## Key Notes

- Uses Homebrew twtxt installation (no virtual environment needed)
- All tweets are immediately published to GitHub when using `./tweet.sh tweet`
- The feed is publicly accessible at the GitHub raw URL
- Configuration keeps identity disclosure disabled for privacy
- Styled web view available through GitHub Pages
