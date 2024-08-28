/// <reference types = 'cypress' />

describe('Login Test using cypress', function(){

    it('Validate login with Valid Credentials',()=>{

        // Test case for valid credentials
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='username']").type('Admin')
        cy.get("input[placeholder='password']").type('admin123')
        cy.get("button[type='submit']").click({force: true})
        // Assertion to confirm the title of the page after login
        cy.title().should('have.text','OrangeHRM')

        
    })
    it('Validate login with invalid Credentials',()=>{

        // Test case for valid credentials
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='username']").type('Invalid user')
        cy.get("input[placeholder='password']").type('Invalid pwd')
        cy.get("button[type='submit']").click({force: true})
        
    })
})