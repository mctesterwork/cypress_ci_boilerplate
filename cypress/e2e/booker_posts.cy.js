import { faker } from '@faker-js/faker';

describe('Listing the bookings', () => {
    let token = ''
    before(() => {
        cy.loginApi().then(() => {
            token = Cypress.env('token')
        })
    })

    it('Creates a new booking', () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        cy.request('POST','/booking', {auth: { 'bearer': token },
        firstname: firstName,
        lastname: lastName,
        totalprice: 111,
        depositpaid: true,
        bookingdates : {
            checkin : "2018-01-01",
            checkout : "2019-01-01"
        },
        additionalneeds : "Breakfast"
        }).then((response) => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    })
})