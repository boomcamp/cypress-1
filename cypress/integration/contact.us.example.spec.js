//File: challenge/cypress/integration/contact.us.example.spec.js

describe('Testing Frontoffice', function(){ 

    const url = 'http://automationpractice.com/index.php?controller=contact' 

    beforeEach(function () {
        cy.visit(url)
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    //The challenge: Create test cases that can automate submission of contact us.
    it('Test#1 - CUSTOMER SERVICE - CONTACT US', function () { 

        //Your tests here...

    })

})