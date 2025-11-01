# Basic Calculator

A small HTML/CSS/JS calculator demo. Features:

- Basic operations: addition, subtraction, multiplication, division
- Percent and sign toggle
- Decimal input
- Keyboard support (numbers, + - * / Enter Backspace % .)

How to run:

1. Open `index.html` in your browser (double-click or use Live Server).

Notes:
- This is a simple demo, expression evaluation is done stepwise (not via a full expression parser).
- Division by zero shows an alert and clears the calculator.
- No external dependencies.

Security & implementation notes:
- This calculator evaluates operations stepwise and does not parse full arithmetic expressions (e.g. "1+2*3" is handled as you press operators sequentially).
- Avoid inserting untrusted strings into the calculator; this demo does not use eval() and only parses numbers and the supported operators.
- If you plan to extend this to accept typed expressions, use a safe expression parser library instead of eval().

Running tests
------------

This project includes unit tests for the core calculator logic using Jest.

Prerequisites: Node.js (>=14) and npm are required.

Install dependencies and run tests:

```bash
npm install
npm test
```

CI
--

A GitHub Actions workflow is included at `.github/workflows/ci.yml` that runs `npm ci` and `npm test` on push and pull requests to `main`.

Notes on dependencies:
- `package.json` contains an `overrides` entry pinning `test-exclude` to `7.0.1` so Jest's dependency tree uses `glob@10` and avoids deprecated `glob@7` and `inflight@1.0.6`.
