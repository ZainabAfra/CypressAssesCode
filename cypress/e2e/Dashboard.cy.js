/// <reference types = 'cypress' />

describe('Dashboard test using  cypress', function(){

    it('Verify user redirected to the dashboard sucessfully',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='username']").type('Admin')
        cy.get("input[placeholder='password']").type('admin123')
        cy.get("button[type='submit']").click({force: true})
        // Assertion to confirm the title of the page after login
        cy.title().should('have.text','OrangeHRM')

        // Validated the user sucessfully login to appliction and navigatet to the dashboard
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard')
        // Validate the Item of the list
        cy.xpath("//p[normalize-space()='Time at Work']").should('include.text','Time at Work')


        
    })
})