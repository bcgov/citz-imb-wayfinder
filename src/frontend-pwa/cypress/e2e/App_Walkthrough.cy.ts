/**
 * @summary A test suite that runs through the app ensuring all views have the correct url
 * @author  Dallas Richmond
 */
describe('View walkthrough', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('Accept Eula', () => {
    cy.visit('/');
    cy.get('input').check();
    cy.get('button').contains('Submit').click();
    cy.url().should('include', '/');
  });

  it('Settings', () => {
    cy.visit('/');
    cy.get('input').check();
    cy.get('button').contains('Submit').click();
    cy.url().should('include', '/');
    cy.get('.css-4hzfx7').click();
    cy.url().should('include', '/settings');
    cy.get('h1').contains('Settings');
    cy.get('select').select('fr');
    cy.get('h1').contains('Paramètres');
    cy.get('select').select('eng');
    cy.contains('500 KM');
    cy.contains('Offline Mode');
    cy.contains('Analytics');
    cy.contains('About/Contact').click();
    cy.url().should('include', '/settings/about');
    cy.get('.css-4hzfx7').click();
    cy.url().should('include', '/settings');
    cy.contains('License Agreement').click();
    cy.url().should('include', '/eula');
    cy.get('.css-4hzfx7').click();
    cy.get('.css-4hzfx7').click();
  });

  it('Find an Office', () => {
    cy.visit('/');
    cy.get('input').check();
    cy.get('button').contains('Submit').click();
    cy.contains('Find an office').click();
    cy.url().should('include', '/location');
    cy.contains('Service BC').click();
    cy.url().should('include', '/location/ServiceBC');
    cy.get('.css-4hzfx7').click();
    cy.contains('ICBC').click();
    cy.url().should('include', '/location/ICBC');
    cy.get('.css-4hzfx7').click();
    cy.contains('Hospitals').click();
    cy.url().should('include', '/location/HealthBC');
    cy.get('.css-4hzfx7').click();
    cy.contains('Provincial Courts').click();
    cy.url().should('include', '/location/Courts');
    cy.get('.css-4hzfx7').click();
    cy.contains('BC Housing').click();
    cy.url().should('include', '/location/BCHousing');
    cy.contains('Home').click();
    cy.url().should('include', '/');
  });

  it('Find a Service', () => {
    cy.visit('/');
    cy.get('input').check();
    cy.get('button').contains('Submit').click();
    cy.contains('Find a service').click();
    cy.url().should('include', '/services');
  });

  it('Report an Event', () => {
    cy.visit('/');
    cy.get('input').check();
    cy.get('button').contains('Submit').click();
    cy.contains('Report an event').click();
    cy.url().should('include', '/report');
    cy.get('#eventType').select('Animal Sighting');
    cy.get('#details').click();
    cy.get('textarea').type('This is a test event from running the front-end tests');
    cy.contains('Submit').click();
  });
});
