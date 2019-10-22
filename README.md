# Cypress Challenge


Prerequisite: https://github.com/boomcamp/cypress


### Instructions

1. Create  folder `challenge`.

```
mkdir challenge && cd challenge
```

2. Inside our newly created `challenge` folder install cypress.

```
npm install cypress --save-dev
```

3. Open cypress window.

```
dev-mentor@devmentor-PC-MK34LEZCBEAD:~/Downloads/challenge$ node_modules/.bin/cypress open
```

You should now have the ff folder structures.

```
dev-mentor@devmentor-PC-MK34LEZCBEAD:~/Downloads/login$ tree -I node_modules
.
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── examples
│   │       ├── actions.spec.js
│   │       ├── aliasing.spec.js
│   │       ├── assertions.spec.js
│   │       ├── connectors.spec.js
│   │       ├── cookies.spec.js
│   │       ├── cypress_api.spec.js
│   │       ├── files.spec.js
│   │       ├── local_storage.spec.js
│   │       ├── location.spec.js
│   │       ├── misc.spec.js
│   │       ├── navigation.spec.js
│   │       ├── network_requests.spec.js
│   │       ├── querying.spec.js
│   │       ├── spies_stubs_clocks.spec.js
│   │       ├── traversal.spec.js
│   │       ├── utilities.spec.js
│   │       ├── viewport.spec.js
│   │       ├── waiting.spec.js
│   │       └── window.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package.json
├── package-lock.json
└── README.md

6 directories, 27 files
```

4. Update `challenge/cypress.json` with this code.

```
{
    "chromeWebSecurity": false
}
```

5. Under `challenge/cypress/integration` create these 4 files.

```
cd cypress/integration && touch login.example.spec.js cart.spec.js create.account.example.specs.js contact.us.example.spec.js
```

**Source Code**

1. `challenge/cypress/integration/login.example.spec.js`.

```
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

```


2. `challenge/cypress/integration/cart.spec.js`.

```
//File: challenge/cypress/integration/cart.spec.js

describe('Testing Frontoffice', function(){ 

    const url = 'http://automationpractice.com/index.php' 

    beforeEach(function () {
        cy.visit(url)
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Test#1 - Searching for Dress', function () { 

        //Step 1. I'd like to view the site using `iphone 6`
        cy.viewport('iphone-6')

        //Step 2. I'd like to search : `Printed` and click `Search` or submit
        cy.get('form#searchbox').within(($form) => {
            cy.get('input[name=search_query]').type("Printed")
            cy.root().submit()
        })

        //Step 3. In `Sort by` option i'd like to sort to `Price: Highest first`
        cy.get('form#productsSortForm').within(($form) => {
            cy.get('select').select('price:desc')
        })

        //Step 4. Below item's list `Showing 1 - 5 of 5 items` i want to check if the length is equal to `5`
        cy.get('ul.product_list').children().should('have.length', 5)

        //Step 5. Id like to `Quick View` the `Printed Chiffon Dress`
        cy.get('ul.product_list > li').within((el) => {
          cy.get('a.product-name').contains("Printed Chiffon Dress").click()
        })
        
    })

    /**
     * The above code automates the searching of item category `Printed`.
     * The challenge is contine to automate adding items to cart.
     */
    it('Test#2 - Adding to Cart', function(){

        //I'd like to view the site using `iphone 6` but in `landscape` mode
        cy.viewport('iphone-6', 'landscape')

        //From `Test#1` repeat `steps 2 - 5`

        //Step 6. Id like to `View larger` the `Printed Chiffon Dress`

        //Step 7. Id like to select these attributes:
                // `Quantity` = `2` 
                // `Size` = `M`
                // `Color` = `Green`
        
        //Step 8. Click `Add to Cart` 

        //Step 9. Click `Proceed to Checkout`

        //Step 10. From `SHOPPING-CART SUMMARY` i want to `Continue shopping`

    })
})

```

3. `challenge/cypress/integration/create.account.example.specs.js`.

```
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
```

4. `challenge/cypress/integration/contact.us.example.spec.js`.

```
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
```

### Directions

Copy paste the contents from folder `challenge/cypress/integration` then complete all challenges.


### Finished 

Open a pull request from your `submission` branch back to the `master` branch of this repository.
