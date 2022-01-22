// Write your tests here!
let  expect  = require("chai").expect;
let { caesar } = require("../src/caesar");

describe("caesar", () => {
  describe("validation", () => {
    it("should return false when shift is 0", () => {
      let actual = caesar("validation", 0, true);
      expect(actual).to.be.false;
    });
    it("should return false if shift is less than -25", () => {
      let actual = caesar("validation", -50, true);
      expect(actual).to.be.false;
    });
    it("should return false if shift is greater than 25", () => {
      let actual = caesar("validation", 50, true);
      expect(actual).to.be.false;
    });
    it("should return false if no shift was given", () => {
      let actual = caesar("validation", );
      expect(actual).to.be.false;
    });
  });
  describe("encoding", () => {
    it("should ignore capital letters and give same result", () => {
      let up = caesar("VAL", 2, true);
      let low = caesar("val", 2, true);
      expect(up).to.equal(low);
    });
    it("should handle shifts that go past the end of alphabet and wrap around", () => {
      let shift = caesar("z", 3, true);
      let actual = "c";
      expect(shift).to.equal(actual);
    });
    it("should handle shifts that go past the beginning of the alphabet and wrap around", () => {
      let shift = caesar("a", -3, true);
      let actual = "x";
      expect(shift).to.equal(actual);
    });
    it("should maintain spaces and nonalphabetic symbols in the message in encoding", () => {
      let space = caesar("t e s t 1", 1, true);
      let actual = "u f t u 1";
      expect(space).to.equal(actual);
    });
    it("should maintain spaces and nonalphabetic symbols in the message in decoding", () => {
      let space = caesar("u f t u 1", 1, false);
      let actual = "t e s t 1";
      expect(space).to.equal(actual);
    });
  });
});
