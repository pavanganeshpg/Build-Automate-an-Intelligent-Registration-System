# Quick Start - Clone and Run

Get the project running in 3 simple steps.

## Step 1: Clone Repository

```bash
git clone https://github.com/pavanganeshpg/Intelligent-Registration-System-automation.git
cd Intelligent-Registration-System-automation
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Run Tests

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

## Expected Output

```
Registration Form
  ✓ keeps submit disabled and shows error when last name is missing (3.6s)
  ✓ registers successfully with all valid fields and shows success alert (11.9s)
  ✓ validates cascading dropdowns and password strength + mismatch (4.3s)
  ✓ shows phone error when country code does not match selected country (1.8s)

4 passing (22 seconds)
```

## Test Artifacts

After successful execution:

- Screenshots saved to: `cypress/screenshots/`
- Video saved to: `cypress/videos/`
- HTML report saved to: `cypress/results/cypress-mochawesome-reporter/index.html`

## View Tests in Interactive Mode

```bash
npx cypress open
```

Select your browser and click on `registration.cy.js` to start testing.

## Documentation

- **Setup Guide:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Complete Documentation:** [AUTOMATION_DOCUMENTATION.md](./AUTOMATION_DOCUMENTATION.md)
- **Main README:** [README.md](./README.md)

---

**Status:** Ready to run  
**Framework:** Cypress v14.5.4  
**Last Updated:** November 19, 2025
