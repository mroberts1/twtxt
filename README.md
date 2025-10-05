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
- `venv/` - Python virtual environment with twtxt installed
- Setup scripts and configuration

To use twtxt locally:
1. Activate the virtual environment: `source venv/bin/activate`
2. Use twtxt commands: `twtxt tweet "Hello world!"`

## Format

The twtxt format is simple - each line contains a timestamp and message:
```
2023-12-07T15:30:00+00:00	This is a tweet!
```