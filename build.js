#!/usr/bin/env node

const fs = require('fs');

function slimdown(text) {
  const rules = [
    [/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">'],
    [/(?<!!)(\[([^\]]+)\])\(([^)]+)\)/g, '<a href="$3">$2</a>'],
    [/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>'],
    [/(\*|_)(.+?)\1/g, '<em>$2</em>'],
    [/~~(.+?)~~/g, '<del>$1</del>'],
    [/==(.+?)==/g, '<mark>$1</mark>'],
    [/`([^`]+)`/g, '<code>$1</code>'],
  ];
  for (const [regex, replacement] of rules) {
    text = text.replace(regex, replacement);
  }
  text = text.replace(/#(\w+)/g, '<span class="tag">#$1</span>');
  return text;
}

function readEntries() {
  const content = fs.readFileSync('twtxt.txt', 'utf8');
  return content.trim().split('\n')
    .filter(line => line.trim())
    .map(line => {
      const tab = line.indexOf('\t');
      return { timestamp: line.slice(0, tab), content: line.slice(tab + 1) };
    })
    .reverse();
}

function generateHTML() {
  const entries = readEntries();

  const entriesHTML = entries.map(entry => {
    const date = entry.timestamp.slice(0, 10);
    const rendered = slimdown(entry.content);
    return `    <li><span class="g">${date}</span> ${rendered}</li>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>continuous partial attention</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <header>
      <h1>continuous partial attention</h1>
    </header>
    <ul class="feed">
${entriesHTML}
    </ul>
    <footer class="meta">
      <a href="twtxt.txt">twtxt feed</a> ·
      <a href="https://github.com/buckket/twtxt">what is twtxt?</a>
    </footer>
  </main>
</body>
</html>`;
}

fs.writeFileSync('index.html', generateHTML());
console.log('Built index.html');
