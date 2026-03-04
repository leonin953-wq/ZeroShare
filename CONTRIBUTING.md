# Contributing to ZeroShare

First off, thank you for considering contributing to ZeroShare! It's people like you that make ZeroShare a great tool for secure, serverless file sharing.

## How Can I Contribute?

### Reporting Bugs
If you find a bug, please open an issue! Provide as much information as possible, including:
- Your operating system and browser.
- The steps to reproduce the issue.
- Any console errors you see.

### Suggesting Enhancements
If you have an idea to make ZeroShare better, we'd love to hear it. Open an issue and describe your feature request clearly. 

### Pull Requests
1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Ensure your code is formatted correctly.
4. Issue that pull request!

## Understanding the Codebase
- `index.html`: The landing page and SEO hub.
- `ZeroShare.html`: The actual PWA application interface.
- `assets/js/app.js`: Contains all the WebRTC (PeerJS) signaling and Web Crypto API (AES-256) encryption logic. 

We use Vanilla JavaScript, so there's no need for `npm install` or complex build steps. Just open the HTML files in your browser!
