# My twtxt Feed

This repository hosts my [twtxt](https://github.com/buckket/twtxt) feed - a decentralized microblogging platform.

## What is twtxt?

twtxt is a decentralised, minimalist microblogging service for hackers. Instead of using a centralized platform, your tweets are stored in a simple text file that others can follow.

## My Feed

- **Feed URL**: `https://raw.githubusercontent.com/mroberts1/twtxt/main/twtxt.txt`
- **Nick**: dokoissho

## How to Follow Me

If you're using twtxt, you can follow my feed with:

```bash
twtxt follow mroberts1 https://raw.githubusercontent.com/mroberts1/twtxt/main/twtxt.txt
```

## Setup

This repository contains:
- `twtxt.txt` - My twtxt feed file
- `twtxt_config` - Local twtxt configuration file
- `tweet.sh` - Helper script for easy tweeting
- `index.html` - Styled web view of the feed

**Requirements**: twtxt installed via Homebrew (`brew install twtxt`)

## Usage

### Using the helper script (recommended):
```bash
# Post a new tweet (automatically pushes to GitHub)
./tweet.sh tweet "Hello world!"

# View your following list
./tweet.sh following

# Follow someone
./tweet.sh follow username https://example.com/twtxt.txt
```

### Manual usage:
```bash
# Use twtxt directly with local config
twtxt -c twtxt_config tweet "Hello world!"

# Push changes to GitHub
git add twtxt.txt && git commit -m "New tweet" && git push
```

### Installation:
```bash
# Install twtxt via Homebrew
brew install twtxt
```

## Format

The twtxt format is simple - each line contains a timestamp and message:
```
2023-12-07T15:30:00+00:00	This is a tweet!
```