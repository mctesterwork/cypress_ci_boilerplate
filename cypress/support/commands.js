// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginApi', () => {
    cy.fixture('credentials.json').then((credentials) => {
        cy.request('POST', '/auth', {
          username: credentials.username,
          password: credentials.password
        }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('token')
          Cypress.env('token', response.body['token'])
          // TODO: Save the token to a JSON file under fixtures
        })
      })
})