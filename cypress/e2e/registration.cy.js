// cypress/e2e/registration_form.cy.js
describe('Registration Form', () => {
  const url = 'https://pavanganeshpg.github.io/Intelligent-Registration-System-automation/';
  const RED_BORDER_COLORS = [
    'rgb(220, 53, 69)',
    'rgb(255, 0, 0)',
    'rgb(192, 21, 47)',
  ];

  const expectRedBorder = ($el, label) => {
    const borderColor = $el.css('border-color');
    if (!RED_BORDER_COLORS.includes(borderColor)) {
      console.log(`[${label}] Unexpected border color: ${borderColor}`);
    }
    expect(RED_BORDER_COLORS, `${label} border color`).to.include(borderColor);
  };

  const logPageMeta = (flowName) => {
    cy.url().then((currentUrl) => {
      cy.title().then((title) => {
        const urlLog = `[${flowName}] URL: ${currentUrl}`;
        const titleLog = `[${flowName}] Title: ${title}`;
        cy.log(urlLog);
        cy.log(titleLog);
        console.log(urlLog);
        console.log(titleLog);
      });
    });
  };

  // Global handler to ignore app-side JS errors
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore all uncaught exceptions from the app
    return false;
  });

  beforeEach(() => {
    cy.visit(url);
  });

  it('keeps submit disabled and shows error when last name is missing', () => {
    logPageMeta('Missing Last Name Flow');
    // Fill everything EXCEPT last name
    cy.get('#firstName').type('John');
    cy.get('#email').type('john@example.com');
    cy.get('#phone').type('+12025550199'); // valid US number format for your regex

    cy.get('#genderMale').check({ force: true });

    cy.get('#country').select('US');
    cy.get('#state').should('not.be.disabled').select('CA');
    cy.get('#city').should('not.be.disabled').select('Los Angeles');

    cy.get('#password').type('Password@123');
    cy.get('#confirmPassword').type('Password@123');

    cy.get('#terms').check({ force: true });

    // Last name is still empty → submit must stay disabled
    cy.get('#submitBtn').should('be.disabled');

    // Trigger validation on last name
    cy.get('#lastName').focus().blur();

    // more robust: wait for the error element with the expected text
    cy.contains('#lastNameError', 'This field is required').should('be.visible');

    cy.get('#lastName').should(($el) => expectRedBorder($el, 'Last Name'));

    // ensure submit remains disabled
    cy.get('#submitBtn').should('be.disabled');

    cy.screenshot('error-state');
  });

  it('registers successfully with all valid fields and shows success alert', () => {
    logPageMeta('Successful Registration Flow');
    cy.get('#firstName').type('Jane');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('jane.doe@gmail.com');
    cy.get('#phone').type('+919876543210'); // later we'll pick IN

    cy.get('#genderFemale').check({ force: true });

    cy.get('#country').select('IN');
    cy.get('#state').should('not.be.disabled').and('be.visible').select('MH');
    cy.get('#city').should('not.be.disabled').and('be.visible').select('Mumbai');

    cy.get('#password').type('StrongPass2025!');
    cy.get('#confirmPassword').type('StrongPass2025!');

    cy.get('#terms').check({ force: true });

    // Button should now be enabled
    cy.get('#submitBtn').should('be.enabled');

    cy.get('#submitBtn').click();

    // Success alert should show correct text - wait for visibility and content
    cy.get('#alertBox', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Registration Successful')
      .and('contain', 'Your profile has been submitted successfully.');

    cy.screenshot('success-state');

    // Wait until first name resets (app has 2s delay)
    cy.get('#firstName', { timeout: 4000 }).should('have.value', '');

    // After reset, fields should be empty / reset
    cy.get('#firstName').should('have.value', '');
    cy.get('#lastName').should('have.value', '');
    cy.get('#email').should('have.value', '');
    cy.get('#phone').should('have.value', '');
    cy.get('#country').should('have.value', '');
    cy.get('#state').should('be.disabled').and('have.value', '');
    cy.get('#city').should('be.disabled').and('have.value', '');
    cy.get('#password').should('have.value', '');
    cy.get('#confirmPassword').should('have.value', '');
    cy.get('#terms').should('not.be.checked');
    cy.get('#submitBtn').should('be.disabled');

    // Password strength UI should be reset
    cy.get('#passwordStrengthBar').should('have.class', 'password-strength-bar');
    cy.get('#passwordStrengthText').should('have.text', '');
  });

  it('validates cascading dropdowns and password strength + mismatch', () => {
    logPageMeta('Validation Flow');
    // Cascading dropdowns: FR → IDF → Paris
    cy.get('#country').select('FR');
    cy.get('#state')
      .should('not.be.disabled')
      .select('IDF'); // Île-de-France

    cy.get('#city')
      .should('not.be.disabled')
      .select('Paris');

    // Weak password
    cy.get('#password').type('123456');
    cy.get('#passwordStrengthText').should('contain', 'Weak');

    // Medium password
    cy.get('#password').clear().type('Password1');
    cy.get('#passwordStrengthText').should('contain', 'Medium');

    // Strong password
    cy.get('#password').clear().type('StrongPass2025!');
    cy.get('#passwordStrengthText').should('contain', 'Strong');

    // Mismatching confirm password
    cy.get('#confirmPassword').type('WrongPassword').blur();
    cy.get('#confirmPasswordError')
      .should('be.visible')
      .and('contain', 'Passwords do not match');

    // Fix mismatch and ensure error disappears & button can become enabled
    cy.get('#confirmPassword').clear().type('StrongPass2025!').blur();
    cy.get('#confirmPasswordError').should('not.be.visible');

    // Fill remaining required fields minimally to verify submit enables
    cy.get('#firstName').type('Test');
    cy.get('#lastName').type('User');
    cy.get('#email').type('test.user@example.com');
    cy.get('#phone').type('+33123456789'); // FR, +33

    cy.get('#genderMale').check({ force: true });
    cy.get('#terms').check({ force: true });

    cy.get('#submitBtn').should('be.enabled');
    cy.screenshot('form-logic-validation');
  });

  it('shows phone error when country code does not match selected country', () => {
    logPageMeta('Phone Validation Flow');
    cy.get('#country').select('US');

    cy.get('#phone').type('+919876543210').blur(); // Indian number in US

    cy.get('#phoneError')
      .should('be.visible')
      .and('contain', 'Phone must start with +1'); // from your JS

    cy.get('#submitBtn').should('be.disabled');
    cy.screenshot('phone-validation-error');
  });

  it('re-disables submit button when a required field is cleared after enabling', () => {
    logPageMeta('Submit Toggle Flow');

    cy.get('#firstName').type('Toggle');
    cy.get('#lastName').type('Tester');
    cy.get('#email').type('toggle.tester@example.com');
    cy.get('#phone').type('+12025550123');
    cy.get('#genderMale').check({ force: true });
    cy.get('#country').select('US');
    cy.get('#state').should('not.be.disabled').select('CA');
    cy.get('#city').should('not.be.disabled').select('Los Angeles');
    cy.get('#password').type('StrongPass2025!');
    cy.get('#confirmPassword').type('StrongPass2025!');
    cy.get('#terms').check({ force: true });

    cy.get('#submitBtn').should('be.enabled');

    cy.get('#email').clear().blur();
    cy.get('#emailError').should('be.visible');
    cy.get('#email').should(($el) => expectRedBorder($el, 'Email'));
    cy.get('#submitBtn').should('be.disabled');

    cy.get('#email').type('toggle.tester@example.com');
    cy.get('#emailError').should('not.be.visible');
    cy.get('#submitBtn').should('be.enabled');

    cy.get('#email').clear().type('bad-email').blur();
    cy.get('#emailError').should('be.visible');
    cy.get('#submitBtn').should('be.disabled');
  });
});
