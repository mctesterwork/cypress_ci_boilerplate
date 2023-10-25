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
        const checkinDate = faker.date.past({years: 2}).toISOString().split('T')[0]
        cy.request('POST','/booking', { auth: { 'bearer': token },
        firstname: firstName,
        lastname: lastName,
        totalprice: 111,
        depositpaid: true,
        bookingdates : {
            checkin : checkinDate,
            checkout : "2023-01-01"
        },
        additionalneeds : "Breakfast"
        }).then((response) => {
            console.log(response)
            expect(response.status).to.equal(200)
        })
    })
})