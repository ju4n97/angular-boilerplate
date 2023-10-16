/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to type a few random words into input elements
         * @param count=3
         * @example cy.get('input').typeRandomWords()
         */
        login(): Chainable<AUTWindow>;
        setAuthSession(): Chainable<void>;
    }
}
