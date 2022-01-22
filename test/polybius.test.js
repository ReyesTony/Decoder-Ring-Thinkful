// Write your tests here!
let expect = require("chai").expect;
let { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("encoding", () => {
    it("should return 42 if given the letters i or j", () => {
      let test = polybius("ij", true);
      let expected = "4242";
      expect(test).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      let up = polybius("MESSAGE", true);
      let low = polybius("message", true);
      expect(up).to.equal(low);
    });
    it("should encode the message based on polybius cipher", () => {
      let actual = polybius("message", true);
      let expected = "23513434112251";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message", () => {
      let test = polybius("i j", true);
      let expected = "42 42";
      expect(test).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should decode message based on polybius cipher", () => {
      let decode = polybius("23513434112251", false);
      let expected = "message";
      expect(decode).to.equal(expected);
    });
    it("should return i/j when given 42 to decode", () => {
      let decode = polybius("42", false);
      let expected = "i/j";
      expect(decode).to.equal(expected);
    });
    it("should maintain spaces when decoding", () => {
      let decode = polybius("23 51", false);
      let expected = "m e";
      expect(decode).to.equal(expected);
    });
  });
});
