// tests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe("Loads the home page", () => {
    beforeEach(() => {
        cy.visit("/")
    })
  
  describe('Correct Site', () => {
    it('Checks that site loads', () => {
      cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	  cy.url().should('include', '/main_code/main.html')
    })
  })