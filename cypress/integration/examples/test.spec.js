describe ("Test for New10", () => {
it ("Opens GitHub login page", () => { 

    cy.visit("https://github.com/login");
    cy.get("h1")
    .should("have.text","Sign in to GitHub");
});

it ("Login to Github", () => { 
cy.get('#login_field')
.type('patriciafalcao007@icloud.com')
.should('have.value', 'patriciafalcao007@icloud.com') 
.get('#password')
.type('patriciafalcao007@icloud.com')
.get('.btn-primary').click()
// .get('.user-nav').should('be.visible')
});
}); 