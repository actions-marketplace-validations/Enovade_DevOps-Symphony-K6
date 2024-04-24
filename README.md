# Enovade DevOps Symphony Suite

# Title: Performance and Stress Testing with K6 and AI Reporting

This repository contains automated performance and stress tests using K6, integrated via GitHub Actions. Post-test, an AI-driven system generates insightful reports to analyze the performance metrics.

## Overview

We use [K6](https://k6.io) for scripting performance and stress tests. Tests are automatically triggered via GitHub Actions upon specific events, such as pushing to main or creating a pull request. After tests are executed, our custom AI module analyzes the results and generates a comprehensive report on key performance metrics.

## Getting Started

### Prerequisites

- A GitHub account
- Basic understanding of YAML (for editing GitHub Actions workflows)
- Familiarity with JavaScript (for K6 test scripts)

### Installation

1. **Fork this repository:** Click the 'Fork' button on the top right of this page.
2. **Clone your forked repository:** `git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git`
3. **Navigate into the repository directory:** `cd YOUR_REPOSITORY_NAME`

### Configuration

1. **Set up K6:** Ensure K6 is installed on your local machine for test script development. Installation instructions can be found [here](https://k6.io/docs/getting-started/installation).
2. **GitHub Secrets:** Set up the necessary secrets in your GitHub repository:
   - `K6_CLOUD_TOKEN`: Your K6 Cloud API token for storing results and generating reports.

### Writing Tests

You can add or modify K6 scripts in the `tests/` directory. Here’s a simple example of a K6 test script:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://testapi.io/api/myapi');
  sleep(1);
}
```
