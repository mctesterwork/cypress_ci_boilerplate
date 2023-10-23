describe('Listing the bookings', () => {
    let token = ''
    before(() => {
        cy.loginApi().then(() => {
            token = Cypress.env('token')
        })
    })

    it('Gets a list of all booking IDs', () => {
        cy.request('GET','/booking', {auth: { 'bearer': token }}).then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('Gets a specific booking ID', () => {
        cy.request('GET', '/booking/1', {auth: { 'bearer': token }}).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('firstname', 'Mark')
        })
    })
})