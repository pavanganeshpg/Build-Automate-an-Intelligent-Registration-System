# Intelligent Registration System - Test Automation

Comprehensive automated testing solution for a User Registration Form built with **Cypress Framework**.

## Quick Start

### Prerequisites
- **Node.js** v14 or higher - [Download](https://nodejs.org/)
- **npm** v6 or higher (included with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Installation (3 Steps)

```bash
# Clone the repository
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation

# Install dependencies
npm install

# Run tests in headless mode
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

### Run Tests

**Headless mode (command line):**
```bash
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

**Interactive mode (UI):**
```bash
npx cypress open
```

**Specific test flow:**
```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" -k "Flow A"
```

## Project Structure

```
Intelligent-Registration-System-automation/
├── index.html                              # Registration form application
├── cypress.config.js                       # Cypress configuration
├── package.json                            # Dependencies and npm scripts
├── README.md                               # Quick start guide
├── SETUP_GUIDE.md                          # Detailed setup instructions
├── CLONE_AND_RUN.md                        # Quick clone and run guide
├── AUTOMATION_DOCUMENTATION.md             # Complete test documentation
└── cypress/
    ├── e2e/
    │   └── registration.cy.js              # 4 test cases
    ├── fixtures/
    │   └── testData.json                   # Test data
    ├── support/
    │   └── e2e.js                          # Cypress support
    ├── screenshots/                        # Test screenshots
    └── videos/                             # Test recordings
```

## Test Results

All 4 tests pass successfully:

| Test | Status | Duration |
|------|--------|----------|
| Flow A: Missing Last Name Validation | ✅ Pass | 3.5s |
| Flow B: Successful Registration | ✅ Pass | 12.1s |
| Flow C: Cascading Dropdowns & Password Validation | ✅ Pass | 3.9s |
| Flow D: Phone Country Validation | ✅ Pass | 1.6s |

**Total Execution Time:** ~22 seconds  
**Pass Rate:** 100% (4/4)

## Test Coverage

### Flow A: Validation Error Handling
- Tests missing required fields
- Validates submit button remains disabled
- Verifies error message display

### Flow B: Successful Registration
- Tests valid form submission
- Validates success alert display
- Confirms form reset after submission

### Flow C: Form Logic Validation
- Tests cascading dropdown functionality
- Validates password strength meter
- Tests password mismatch detection

### Flow D: Country-Specific Validation
- Tests phone number validation by country code
- Validates error handling for invalid formats

## Features

### Registration Form
- 13 form fields with real-time validation
- Support for 16+ countries with cascading states and cities
- Password strength meter with visual indicator
- Email validation with disposable domain detection
- Country-specific phone number validation
- Responsive design for mobile and desktop
- WCAG accessibility compliance
- Auto-reset after successful submission

### Test Automation
- Comprehensive test coverage (4 test cases)
- Screenshot capture for each test
- Video recording of test execution
- HTML report generation
- Professional error handling

## Test Artifacts

After running tests, the following files are generated:

- **Screenshots:** `cypress/screenshots/`
- **Videos:** `cypress/videos/`
- **HTML Report:** `cypress/results/cypress-mochawesome-reporter/index.html`

## Live Application

View the registration form at:  
https://pavanganeshpg.github.io/Intelligent-Registration-System-automation/

## System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Operating System | Windows/Mac/Linux | Latest LTS |
| RAM | 4 GB | 8 GB+ |
| Disk Space | 500 MB | 1 GB |
| Node.js | v14 | v18+ |
| npm | v6 | v9+ |

## Troubleshooting

### "npm command not found"
Install Node.js from https://nodejs.org/

### "Cypress not found"
Run `npm install` in the project directory

### "Tests fail with timeout errors"
Run with increased timeout:
```bash
npx cypress run --spec "cypress/e2e/registration.cy.js" --config defaultCommandTimeout=10000
```

### "Module not found: cypress"
Clear and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Documentation

For detailed information, see:
- **Setup Instructions:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Quick Start:** [CLONE_AND_RUN.md](./CLONE_AND_RUN.md)
- **Complete Documentation:** [AUTOMATION_DOCUMENTATION.md](./AUTOMATION_DOCUMENTATION.md)

## Author

**Pavan Ganesh**  
GitHub: [@pavanganeshpg](https://github.com/pavanganeshpg)  
Repository: [Intelligent-Registration-System-automation](https://github.com/pavanganeshpg/Intelligent-Registration-System-automation)

## License

ISC License - See LICENSE file for details.

---

**Status:** Production Ready  
**Framework:** Cypress v14.5.4  
**Last Updated:** November 19, 2025

## ✅ Test Coverage

All 4 tests are **PASSING** ✅

### Test Cases:
1. **Flow A - Negative Scenario**
   - Validates error handling when Last Name is missing
   - Ensures submit button remains disabled
   - Verifies error message display

2. **Flow B - Positive Scenario**
   - Successful form submission with all valid data
   - Validates success alert display
   - Confirms form reset after submission

3. **Flow C - Form Logic Validation**
   - Cascading dropdown functionality
   - Password strength meter validation
   - Password mismatch detection

4. **Flow D - Phone Validation**
   - Country-specific phone number validation
   - Error handling for invalid phone formats

## 📊 Test Execution Results

```
✅ Total Tests:     4
✅ Passing:         4
❌ Failing:         0
⏱️  Duration:       ~25 seconds
📸 Screenshots:     6 captured
🎥 Video:          Recorded
📋 HTML Report:    Generated
```

## 🛠️ Available npm Scripts

```json
{
  "test:all":         "Run all tests",
  "test:chrome":      "Run tests in Chrome",
  "test:firefox":     "Run tests in Firefox",
  "test:local":       "Run tests against local environment",
  "test:dev":         "Run tests against dev environment",
  "test:qa":          "Run tests against QA environment",
  "test:prod":        "Run tests against production",
  "test:registration": "Run registration tests only",
  "test:report":      "Run tests and generate report"
}
```

## 📝 Form Features

The registration form includes:
- **13 Form Fields** with real-time validation
- **16+ Countries** with cascading states and cities
- **Password Strength Meter** with visual indicator
- **Email Validation** including disposable domain detection
- **Phone Validation** by country code
- **Responsive Design** (Mobile & Desktop)
- **Accessibility Features** (WCAG compliant)
- **Auto-reset** after successful submission

## 🔍 Troubleshooting

### Issue: "npm command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "Cypress not found"
**Solution:** Run `npm install` in the Cypress-Framework directory

### Issue: Tests fail on different computer
**Solution:** 
1. Delete `node_modules` folder: `rm -rf node_modules`
2. Delete lock file: `rm package-lock.json`
3. Reinstall: `npm install`

### Issue: Port already in use
**Solution:** The tests run headless by default, no port conflict expected

## 📚 Documentation

For detailed information about:
- Test flows and scenarios
- Automation techniques used
- Bug fixes applied
- UI/UX enhancements

See: **[AUTOMATION_DOCUMENTATION.md](./AUTOMATION_DOCUMENTATION.md)**

## 🎬 Video & Screenshots

Test execution artifacts are stored in:
- **Screenshots:** `Cypress-Framework/cypress/screenshots/`
- **Videos:** `Cypress-Framework/cypress/videos/`
- **HTML Report:** `Cypress-Framework/cypress/results/cypress-mochawesome-reporter/index.html`

## 🔗 Live Application

View the registration form:
https://pavanganeshpg.github.io/Intelligent-Registration-System-automation/

## 💻 System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **RAM** | 4 GB | 8 GB+ |
| **Disk Space** | 500 MB | 1 GB |
| **Node.js** | v14 | v18+ |
| **npm** | v6 | v9+ |
| **OS** | Windows/Mac/Linux | Latest LTS |

## 🚀 Continuous Integration

The project includes:
- ✅ Cypress configuration for CI/CD
- ✅ Docker support with docker-compose
- ✅ Jenkins pipeline configuration
- ✅ Mochawesome reporter integration
- ✅ JUnit XML report generation

## 👤 Author

**Pavan Ganesh**
- GitHub: [@pavanganeshpg](https://github.com/pavanganeshpg)
- Repository: [Intelligent-Registration-System-automation](https://github.com/pavanganeshpg/Intelligent-Registration-System-automation)

## 📄 License

This project is licensed under the ISC License - see LICENSE file for details.

## ✨ Key Features

✅ **4/4 Tests Passing**
✅ Full Automation Coverage
✅ Real-time Form Validation
✅ Cascading Dropdowns
✅ Password Strength Meter
✅ Country-specific Phone Validation
✅ Responsive Design
✅ Complete Documentation
✅ Docker Support
✅ Jenkins Integration
✅ HTML & JUnit Reports
✅ Video Recording

## 📞 Support

For issues or questions:
1. Check [AUTOMATION_DOCUMENTATION.md](./AUTOMATION_DOCUMENTATION.md)
2. Review test cases in `Cypress-Framework/cypress/e2e/registration.cy.js`
3. Check existing GitHub issues
4. Create a new issue with detailed information

---

**Last Updated:** November 19, 2025
**Status:** ✅ Production Ready
**Framework:** Cypress 13.0.0
**Node Version:** v14+ required
