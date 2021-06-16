// adding-todos.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

describe('adding a todo item to the todo list', () => { 

    describe('adding a todo item to the todo list', () => {
        it('should add a new item to the list', () => {
            cy.visit('https://todomvc.com/examples/angularjs/#/') 
            cy.get('.new-todo').type('Feed the cats{enter}')
            cy.contains('.todo-list li','Feed the cats').should('be.visible')
        })    
    })
})

describe("adding 2 items to the list", () => {
    it("should show only complete items", ()=> {
        cy.visit("https://todomvc.com/examples/angularjs/#/")
        cy.get(".new-todo").type("Learning a language{enter}").type("Learning the methodology{enter}")
        cy.get(".todo-list label").should("have.length",2)
        cy.contains("li", "Learning the methodology").find(".toggle").click()
        cy.contains("a", "Completed").click()
        cy.get(".todo-list label").should("have.length",1).eq(0).should("have.text", "Learning the methodology")
    })
})