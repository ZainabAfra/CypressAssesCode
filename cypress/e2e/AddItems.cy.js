/// <reference types = 'cypress' />

describe('Add Items on the list', function(){

    before(function(){
        cy.Login(login.emailId, login.password)
    })
    it('Enter Employee List on the PIM',()=>{
        cy.fixture('employeeData').then((data)=>{
            //Those data comming from JOSN file under the fixture
            this.data= data
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // Add new iteam on the list
        cy.xpath("//a[@class='oxd-main-menu-item active']").click()
        cy.xpath("//header[@class='oxd-topbar']//li[3]").click()
        cy.get("input[placeholder='First Name']").type(data.FirstName)
        cy.get("input[placeholder='Middle Name']").type(data.MiddleName)
        cy.get("input[placeholder='Last Name']").type(data.LastName)
        cy.get("button[type='submit']").click()

        })
        
        
    })
})