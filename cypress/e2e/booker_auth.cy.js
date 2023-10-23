// TODO: Change this to a command, use before each to authenticate on other tests
describe('Authenticate to RESTful booker app', () => {
  it('Makes a post request and receives a token', () => {
    cy.fixture('credentials.json').then((credentials) => {
      cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
        username: credentials.username,
        password: credentials.password
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('token')
        // TODO: Save the token to a JSON file under fixtures
      })
    })
  })
})