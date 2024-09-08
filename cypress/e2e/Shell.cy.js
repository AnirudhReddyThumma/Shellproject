describe('Shell Recharge Website', () => {

  beforeEach(() => {
    // Set viewport to desktop size
    cy.viewport(1280, 720); // You can adjust these values as needed
  });

  it('Should open the website, click dropdown, select United Kingdom from Excel, verify redirection, and type "Wales"', () => {

    // Step 1: Visit the website
    cy.visit('https://shellrecharge.com/en');

    // Assertion: Verify the website loaded by checking the presence of the international dropdown
    cy.get('.css-1txziwr.enmru2y4').should('be.visible');

    // Step 2: Click the international dropdown
    cy.get('.css-1txziwr.enmru2y4').click();
    cy.wait(5000);
    cy.get('#cookiebanner-accept-all > span').click();

    // Assertion: Verify the dropdown list is visible
    cy.get('.css-1txziwr.enmru2y4').should('be.visible');

    // Step 3: Get the selected country from commands.js
    cy.getSelectedCountry().then((country) => {
      // Assertion: Verify the country option is present in the dropdown
      cy.contains(country).should('exist').click(); // Use the country from the command
    });
    
    // Step 4:Find the My Account link and ensure it's set to open in a new tab
    cy.get('a[href*="account.shellrecharge.com"]').should('have.attr', 'target', '_blank').then(($el) => {
      const url = $el.prop('href');
      
      // Assertion: Verify the URL of the link is correct
      expect(url).to.include('account.shellrecharge.com');
      cy.visit(url); // Open the link in the same tab
      cy.wait(5000);

      // Assertion: Verify redirection by checking the presence of the login or location field
      cy.url().should('include', 'account.shellrecharge.com');
      
    });

    // Step 5: Interact with the redirected page
    cy.iframe().find('input[placeholder="Search by location"]').should('be.visible').click().type('Wales');

    // Assertion: Verify the input field contains the value 'Wales'
    cy.iframe().find('input[placeholder="Search by location"]').should('have.value', 'Wales');
  });

});
