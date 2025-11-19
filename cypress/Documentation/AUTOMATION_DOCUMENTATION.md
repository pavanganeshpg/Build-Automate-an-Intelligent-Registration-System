# Test Automation Documentation

Complete documentation for the Intelligent Registration System test automation suite.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Test Scenarios](#test-scenarios)
3. [Project Structure](#project-structure)
4. [Running Tests](#running-tests)
5. [Test Results](#test-results)
6. [Form Features](#form-features)

## Project Overview

This project provides comprehensive automated testing for a User Registration Form using the Cypress framework. The test suite validates all aspects of the registration form including validation logic, error handling, and successful submission.

**Framework:** Cypress v14.5.4  
**Test Language:** JavaScript  
**Application URL:** https://pavanganeshpg.github.io/Intelligent-Registration-System-automation/

## Test Scenarios

### Flow A: Required Field Validation

**Test Name:** keeps submit disabled and shows error when last name is missing

**Purpose:** Validate that the form prevents submission when required fields are empty

**Steps:**
1. Load the registration form
2. Fill all fields except Last Name
3. Trigger validation on Last Name field
4. Verify submit button remains disabled and error message displays

**Expected Result:** ✅ PASS (3.6 seconds)

---

### Flow B: Successful Registration

**Test Name:** registers successfully with all valid fields and shows success alert

**Purpose:** Validate successful form submission with all required fields

**Steps:**
1. Load the registration form
2. Fill all form fields with valid data
3. Click Submit button
4. Verify success alert displays
5. Confirm form resets after submission

**Expected Result:** ✅ PASS (11.9 seconds)

---

### Flow C: Form Logic and Validation

**Test Name:** validates cascading dropdowns and password strength + mismatch

**Purpose:** Validate cascading dropdowns, password strength meter, and password matching

**Steps:**
1. Select Country: FR (France)
2. Verify State dropdown updates
3. Select State: IDF (Île-de-France)
4. Verify City dropdown updates
5. Test password strength meter
6. Test password mismatch detection
7. Verify form validation passes

**Expected Result:** ✅ PASS (4.3 seconds)

---

### Flow D: Country-Specific Phone Validation

**Test Name:** shows phone error when country code does not match selected country

**Purpose:** Validate phone number validation by country code

**Steps:**
1. Select Country: US
2. Enter Phone: +91 98765 43210 (Indian format)
3. Trigger validation
4. Verify error message displays
5. Verify submit button remains disabled

**Expected Result:** ✅ PASS (1.8 seconds)

---

## Project Structure

```
Intelligent-Registration-System-automation/
├── index.html                              # Registration form
├── cypress.config.js                       # Cypress configuration
├── package.json                            # Dependencies
├── README.md                               # Quick start guide
├── SETUP_GUIDE.md                          # Setup instructions
├── CLONE_AND_RUN.md                        # Quick start
├── AUTOMATION_DOCUMENTATION.md             # This file
└── cypress/
    ├── e2e/
    │   └── registration.cy.js              # Test file (4 tests)
    ├── fixtures/
    │   └── testData.json                   # Test data
    ├── support/
    │   └── e2e.js                          # Cypress setup
    ├── screenshots/                        # Test evidence
    └── videos/                             # Test recordings
```

## Running Tests

### Command Line (Headless)

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

### Interactive Mode (GUI)

```bash
npx cypress open
```

Then:
1. Select "E2E Testing"
2. Choose your browser
3. Click `registration.cy.js`

### Run Specific Test

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" -k "keeps submit disabled"
```

### Advanced Options

Run with specific timeout:

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" --config defaultCommandTimeout=10000
```

## Test Results

### Current Status

| Test | Result | Duration |
|------|--------|----------|
| Flow A: Required Field Validation | ✅ PASS | 3.6s |
| Flow B: Successful Registration | ✅ PASS | 11.9s |
| Flow C: Form Logic Validation | ✅ PASS | 4.3s |
| Flow D: Phone Validation | ✅ PASS | 1.8s |

**Total Time:** 22 seconds  
**Pass Rate:** 100% (4/4 tests)  
**Status:** Production Ready

### Test Artifacts

After each test run:

- **Screenshots:** Captured at key points in `cypress/screenshots/`
- **Videos:** Complete test execution recording in `cypress/videos/`
- **HTML Report:** Detailed test report in `cypress/results/cypress-mochawesome-reporter/index.html`

## Form Features

### Form Fields (13 Total)

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| First Name | Text | Yes | Min 2 characters |
| Last Name | Text | Yes | Min 2 characters |
| Email | Email | Yes | Valid email format |
| Phone | Tel | Yes | Country code validation |
| Age | Number | No | 18-120 years |
| Gender | Radio | Yes | Single selection |
| Address | Textarea | No | Optional |
| Country | Dropdown | Yes | 16+ countries |
| State | Dropdown | Yes | Cascades from country |
| City | Dropdown | Yes | Cascades from state |
| Password | Password | Yes | Strength meter |
| Confirm Password | Password | Yes | Must match password |
| Terms | Checkbox | Yes | Must be checked |

### Form Behavior

- **Real-time Validation:** Fields validate as user types
- **Error Messages:** Clear, specific messages for each validation failure
- **Submit Button:** Disabled until all validations pass
- **Auto-Reset:** Form clears after successful submission
- **Responsive Design:** Works on mobile, tablet, and desktop

### Password Strength Meter

- **Weak:** Less than 8 characters or only lowercase/numbers
- **Medium:** 8+ characters with mixed case and numbers
- **Strong:** 8+ characters with mixed case, numbers, and special characters

## Troubleshooting

### Tests Fail to Run

**Problem:** "Cannot find module: cypress"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tests Timeout

**Problem:** Tests exceed default 4-second timeout

**Solution:**
```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" --config defaultCommandTimeout=10000
```

### Application Not Accessible

**Problem:** "Network error" when accessing test application

**Solution:**
1. Verify internet connection
2. Check if URL is accessible in browser
3. Verify firewall settings
4. Restart terminal and retry

## Support and Documentation

- **Quick Start:** [CLONE_AND_RUN.md](./CLONE_AND_RUN.md)
- **Setup Guide:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Main README:** [README.md](./README.md)
- **Cypress Documentation:** https://docs.cypress.io/
- **Project Repository:** https://github.com/pavanganeshpg/Intelligent-Registration-System-automation

## Summary

✅ 4 comprehensive test cases  
✅ 100% test pass rate  
✅ Complete form validation coverage  
✅ Production-ready test suite  
✅ Professional documentation  
✅ Ready for immediate deployment  

---

**Status:** Production Ready  
**Framework:** Cypress v14.5.4  
**Last Updated:** November 19, 2025
