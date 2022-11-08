// Testing Asynchronous Code
// The key to testing async code is letting Jasmine know when it’s ready to be tested.

// Using async/await syntax makes testing easier
// Jasmine syntax mimics JavaScript syntax
// Add async before the asynchronous function call
// Add await before the return
// Testing occurs after the return
// Using promise syntax with Jasmine
// Promise values are included in the return statement
// Test is run in the .then() statement that is chained to the return value
// Testing promise resolution and rejection with ES6 Promise Matchers Library
// .toBeResolved() tests if a promise is resolved and will return true if the promise is resolved
// .toBeRejected() tests if a promise is rejected and will return true if the promise is rejected
// .toBeRejectedWith(expected value) tests if the expected error is returned

import countries from "../utilities/countries";
xdescribe('test async axios request', () => {
  let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     beforeEach(function() {
          
          jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      });
  
      afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });
  
  it("should get basic data on the country canada", async () => {
    try{
        const data = await countries.getCountry('canada');
    expect(data).toEqual({
      capital: 'Ottawa',
      region: 'Americas',
      numericCode: '124'
    });
    }catch(err){
        console.log(err)
    }
  });
  
  /** Add test for getRegionCountries function here */
  
  it("should get the countries in the region NAFTA", async () => {
    try{
          const data = await countries.getRegionCountries('nafta');
      expect(data).toEqual([
          'Canada', 'Mexico', 'United States of America'
      ]);
    }catch(err){
        console.log(err)
    }
  });
  
  it("should get capitals of NAFTA countries", async () => {
   try{
        const data = await countries.getRegionCapitals('nafta');
    expect(data).toEqual([
      'Ottawa', 'Mexico City', 'Washington, D.C.'
    ]);
   }catch(err){
        console.log(err)
    }
  });
})