const vowelUnit = require("../app.js");

describe("Vowel Counter", function(){

    let input = "Hello"
    test("This should count all the vowels in the string", () => {
        expect(vowelUnit.countVowels(input)).toEqual(2);
    })
});