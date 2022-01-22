// Write your tests here!
let expect = require("chai").expect;
let { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("validation", () => {
    it("should return false if given alphabet isn't exactly 26 chars long", () => {
      let short = substitution("mess", "qwertyuiopasdfghjklzxcvbn", true);
      expect(short).to.be.false;
    });
    it("should return false if there are duplicate letters in given alphabet", () => {
      let dupe = substitution("mess", "qwertyuiopasdfghjklzxcvbnn", true);
      expect(dupe).to.be.false;
    });
  });
  describe("encoding", () => {
    it("should encode message based on given alphabet", () => {
      let encoded = substitution("message", "plmoknijbuhvygctfxrdzeswaq", true);
      let expected = "ykrrpik";
      expect(encoded).to.equal(expected);
    });
    it("should maintain spaces in message while encoding", () => {
      let spaced = substitution(
        "m e s s a g e",
        "plmoknijbuhvygctfxrdzeswaq",
        true
      );
      let expected = "y k r r p i k";
      expect(spaced).to.equal(expected);
    });
    it("should ignore capital letters and give same message", () => {
      let upper = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq", true);
      let expected = "ykrrpik";
      expect(upper).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should decode message based on given alphabet", () => {
      let decoded = substitution(
        "ykrrpik",
        "plmoknijbuhvygctfxrdzeswaq",
        false
      );
      let expected = "message";
      expect(decoded).to.equal(expected);
    });
    it("should maintain spaces while decoding", () => {
      let spaced = substitution(
        "y k r r p i k",
        "plmoknijbuhvygctfxrdzeswaq",
        false
      );
      let expected = "m e s s a g e";
      expect(spaced).to.equal(expected);
    });
    it("should ignore capital letter while decoding and give same message", () => {
      let upper = substitution("YKRRPIK", "plmoknijbuhvygctfxrdzeswaq", false);
      let expected = "message";
      expect(upper).to.equal(expected);
    });
  });
});
