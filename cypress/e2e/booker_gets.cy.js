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

    it('Gets a specific booking using ID', () => {
        cy.request('GET', '/booking/1', {auth: { 'bearer': token }}).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('firstname')
        })
    })

    it('Gets a specific booking using first and last name', () => {
        const firstname = 'Jim'
        const lastname = 'Wilson'
        cy.request('GET', `/booking?firstname=${firstname}&lastname=${lastname}`, {auth: { 'bearer': token }}).then((response) => {
            console.log(response)
            expect(response.status).to.equal(200)
            expect(response.body[0]).to.have.property('bookingid')
        })
    })
})