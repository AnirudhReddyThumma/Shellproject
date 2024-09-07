describe('Shell Recharge Website - Handle Redirection', () => { 

  it('Should open the website, handle cookie banners, select "United Kingdom" from Excel, and verify redirection', () => { 

     

    // Step 1: Visit the website 

    cy.visit('https://shellrecharge.com/en');  

 

    // Step 2: Handle any cookie banners 

    cy.get('body').then(($body) => {  

      if ($body.find('.cookiebanner__text button').length > 0) {  

        cy.get('.cookiebanner__text button').click({ force: true });  

      } 

    }); 

 

    // Step 3: Click the international dropdown 

    cy.get('.css-1txziwr.enmru2y4').click({ force: true }); 

 

    // Step 4: Get the selected country from commands.js 

    cy.getSelectedCountry().then((country) => { 

      cy.contains(country).click({ force: true }); // Use the country from the command 

    }); 

 

    // Step 5: Click on a link or button that causes redirection 

    cy.get('.hamburger').click(); // Example of clicking a hamburger menu button 

    cy.get('a[href*="account.shellrecharge.com"]').should('have.attr', 'target', '_blank').then(($el) => { 

      const url = $el.prop('href'); 

      cy.visit(url); // Open the link in the same tab 

      cy.wait(5000); 

 

      // Interact with the redirected page 

      cy.iframe().find('input[placeholder="Search by location"]').click().type('Wales'); 

    }); 

  }); 

}); 