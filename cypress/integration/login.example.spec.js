//File : challenge/cypress/integration/login.example.spec.js

describe('Logging In/Logout testing', function(){ 

  //The site to automate
  const url = '' 

  //Callback loginCb
  Cypress.Commands.add('loginCb', (username,password) => {
    cy.request({
      method: 'POST',
      url: url,
      failOnStatusCode: false, // dont fail so we can make assertions
      form: true,              // we are submitting a regular form body
      body: {
        username,
        password
      }
    })
  })
  
  /**
   * The result will pass if the status code is equal to 403
   */
  it('Test#1 - Login failed', function(){

    const username = "wrong";
    const password = "password";
    const statusCode = 403;

    cy.loginCb(username,password)
      .its('status')
      .should('eq', statusCode)   
  })

   /**
   * The result will pass if the status code is equal to 200, meaning success
   */
  it('Test#2 - Logged in success', function(){

    const username = "";
    const password = "";
    const statusCode = 200;

    cy.request(url)
      .its('body')
      .then(() => {
        cy.loginCb(username,password).then((resp) => {
          expect(resp.status).to.eq(statusCode)
        })
      })
  })
  


  

  /**
   * The code above automates the login failure and login success using its status code. 
   * Using the template above, the challenge is automate the login/logout feature of demosite: orangehrm
   */
  const orangeHRMDemo = "https://orangehrm-demo-6x.orangehrmlive.com/auth/login"; 
  const username = "";
  const password = "";

  //Create automation test for login feature 
  it('Test#1 - OrangeHRM Login Test', function(){ 
    //Your test here..

  });

  //Create automation test for logout feature 
  it('Test#2 - OrangeHRM Logout Test', function(){ 
    //Your test here..

  });
})

