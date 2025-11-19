# Setup and Installation Guide

Complete step-by-step instructions for setting up the project on any operating system.

## Prerequisites

Before starting, verify you have the following installed:

- **Git** v2.0 or higher - [Download](https://git-scm.com/)
- **Node.js** v14 or higher - [Download](https://nodejs.org/)
- **npm** v6 or higher (included with Node.js)

### Verify Prerequisites

Open your terminal or command prompt and run:

```bash
# Check Git version
git --version
# Expected output: git version 2.x.x or higher

# Check Node.js version
node --version
# Expected output: v14.x.x or higher

# Check npm version
npm --version
# Expected output: v6.x.x or higher
```

## Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the project from GitHub
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation
```

### Step 2: Install Dependencies

```bash
# Install all required npm packages
npm install
```

**Installation typically takes 2-5 minutes depending on your internet speed.**

### Step 3: Verify Installation

```bash
# Check if Cypress was installed correctly
npx cypress --version

# Verify test file exists
ls cypress/e2e/registration.cy.js
```

## Running Tests

### Run All Tests (Headless Mode)

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

### Run Tests with GUI (Interactive Mode)

```bash
npx cypress open
```

Then:
1. Select "E2E Testing"
2. Select your browser (Chrome recommended)
3. Click on `registration.cy.js`

### Run Specific Test

```bash
# Run Flow A only
npx cypress run --spec "cypress/e2e/registration.cy.js" -k "keeps submit disabled"
```

## Expected Test Results

```
Registration Form
  ✓ keeps submit disabled and shows error when last name is missing (3.6s)
  ✓ registers successfully with all valid fields and shows success alert (11.9s)
  ✓ validates cascading dropdowns and password strength + mismatch (4.3s)
  ✓ shows phone error when country code does not match selected country (1.8s)

4 passing (22 seconds)
```

## Project Structure

```
Intelligent-Registration-System-automation/
├── index.html                    # Registration form
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # Quick start guide
├── SETUP_GUIDE.md                # Setup instructions
├── CLONE_AND_RUN.md              # Quick start
├── AUTOMATION_DOCUMENTATION.md   # Complete documentation
└── cypress/
    ├── e2e/
    │   └── registration.cy.js    # Test cases
    ├── fixtures/
    │   └── testData.json         # Test data
    ├── support/
    │   └── e2e.js                # Cypress setup
    ├── screenshots/              # Test screenshots
    └── videos/                   # Test recordings
```

## Platform-Specific Instructions

### Windows

```bash
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation
npm install
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

### macOS

```bash
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation
npm install
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

### Linux

```bash
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation
npm install
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Operating System | Windows 7+ / macOS 10.9+ / Ubuntu 12+ | Latest LTS |
| RAM | 4 GB | 8 GB+ |
| Disk Space | 500 MB | 1 GB |
| Node.js | v14 | v18+ |
| npm | v6 | v9+ |

## Test Artifacts Generated

- **Screenshots:** `cypress/screenshots/` - Visual evidence of test execution
- **Videos:** `cypress/videos/` - Complete test execution recording
- **HTML Report:** `cypress/results/cypress-mochawesome-reporter/index.html`

## Troubleshooting

### "npm: command not found"

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Run the installer
3. Restart your terminal
4. Verify with `node --version`

### "Cannot find module: cypress"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Tests fail with timeout errors"

**Solution:**
```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" --config defaultCommandTimeout=10000
```

### "Tests cannot access the application"

**Solution:**
1. Check your internet connection
2. Visit: https://pavanganeshpg.github.io/Intelligent-Registration-System-automation/
3. Rerun the tests

### "Permission denied" (macOS/Linux)

**Solution:**
```bash
chmod +x node_modules/.bin/cypress
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

## Useful Commands

```bash
# Open Cypress interactive test runner
npx cypress open

# Run all tests
npx cypress run --spec "cypress/e2e/registration.cy.js"

# Check Cypress version
npx cypress --version

# Clear Cypress cache
npx cypress cache clear
```

## Documentation Links

- **Quick Start:** [CLONE_AND_RUN.md](./CLONE_AND_RUN.md)
- **Complete Guide:** [AUTOMATION_DOCUMENTATION.md](./AUTOMATION_DOCUMENTATION.md)
- **Main README:** [README.md](./README.md)

---

**Status:** Ready for immediate use  
**Framework:** Cypress v14.5.4  
**Last Updated:** November 19, 2025
