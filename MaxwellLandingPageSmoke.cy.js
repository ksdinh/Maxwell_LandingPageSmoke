describe('Maxwell Landing Page Smoke Test', () => {

  // This test will check if the email address is displayed on the landing page
  it('Validates lender email address is displayed', () => {
    cy.visit('https://snap.modernemortgage.com/home/mobile-test');
    cy.get('body > div:nth-child(2) > div > div.second-column.row > div > div > div.loan-officer-contact-wrapper > div:nth-child(3) > span.text--base.text--primary.small').should('be.visible');
    // This searches for the email address element and checks if it is visible on the landing page
    console.log('Lender email is displayed!');
    // The email address is displayed, console prints the email address is displayed

   
  })

  // This test will click apply loan and check if the email exists on second page
  it('Applies loan, validates lender email address is displayed on the page', () => {
    cy.visit('https://snap.modernemortgage.com/home/mobile-test');
    const lenderEmail = cy.get('body > div:nth-child(2) > div > div.second-column.row > div > div > div.loan-officer-contact-wrapper > div:nth-child(3) > span.text--base.text--primary.small')
    // This searches for the email address element and extracts it's text
      .invoke('text')
      // This removes any leading or trailing white space from the email address
      .then((text) => {
        return text.trim();
      });
    lenderEmail.then((email) => {
      console.log(email);
      // This prints the lender email address to the comsole
      cy.get('body > div:nth-child(2) > div > div.landing-page-row.first-column.row > div > div > div.organization-call-to-action-wrapper > a').should('be.visible').click();
      // This clicks the Apply Now button and checks if the email is displayed on the next page
      cy.contains(email);
      console.log("Lender email is not displayed on page!")
      // The email is not displayed, console logs it not displayed the test fails
    });
  });
  

})