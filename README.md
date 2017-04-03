# octozen
Your little dose of octocat zen in Node.

A little collection of 14 statements, called zen, capture the core values and principles of GitHub. This zen is available through the public API.

Let's have a look on such a zen statement. Try it out:

```bash
curl https://api.github.com/octocat
```

## Install

    $ npm i --save octozen

Requires *Node.js* **>=4.8.1**

## Usage

```javascript
const octozen = require('octozen')

console.log(octozen())
```
