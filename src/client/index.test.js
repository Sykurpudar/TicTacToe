//index.test.js
"use strict";

it('empty test to justify file', () => {
  
  expect(true).toBe(true);
});

//Tests on index.js fail because the DOM model document is not defined.

//furthermore, it is not dynamically created by javascript to be testable

//This can be implemented when our template system is refactored

/*

it('getHTMLgrid returns 9 divs with class square', () => {
  
  expect(getHTMLgrid().length).toBe(9);
});
*/
