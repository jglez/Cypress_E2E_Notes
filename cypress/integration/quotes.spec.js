// Describe is a mechanism used to organize our tests
// We can use decribe without declaring it because it's a global 
// variable which exists in the environment in which this code executes
describe('Quotes App', () => {

  // We're going to navigate the Cypress browser to a different URL
  // before each test to reset the browser (to have a blank slate)
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  // FIRST TEST
  // Use the 'it' keyword for tests
  // Invoked() --> first argument is a string, second is a callback
  it('First Test', () => {
    // Tests need some sort of assertion (at least one or more)
    expect(5).to.equal(5)

    // eql is for 'deepy equal'
    // should be reserved for an object or something similar

    // we can do arithmetic expressions & objects & arrays
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})

    // We can assert two values to NOT be equal
    expect({}).to.not.equal({})

    // UNIT TEST EXAMPLE
    // We expect that the invocation of the function foo with the
    // argument of 4 to equal 44
    // expect(foo(4)).to.be(44)
  })
})

/* NOTES:
1. The string argument in the describe() block becomes the first
   group of tests in the Cypress automated web browser

2. The green checkmark in the Cypress window marks one passing test

3. The actual test is the it() block

4. We can have as many assertions as we'd like

5. deepy equal (eql) should be used for comparing shapes of data such
   as arrays or objects and 'equal' for primitive types such as
   numbers, strings, booleans, etc

it('My test', () => {
    My assertions
})

*/