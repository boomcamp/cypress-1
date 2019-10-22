//File: challenge/cypress/integration/create.account.example.specs.js

describe('Testing Frontoffice', function(){ 

    const url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account' 

    beforeEach(function () {
        cy.visit(url)
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    //The challenge: create test cases that can automate the account registration.
    it('Test#1 - Can create an account ', function () { 

        //Your tests here...

    })
})