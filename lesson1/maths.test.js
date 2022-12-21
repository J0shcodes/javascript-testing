describe("In the maths global object", () => {

  describe("In the random function", () => {
    it("Should return a number", () => {
      expect(typeof Math.random()).toBe("number");
    });
    it("Should return a number between 0 and 1", () => {
      const randomNumber = Math.random();
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(1);
    });
  });

  describe("In the round function", () => {
    it("It should return a rounded value of 4.5 being 5", () => {
      expect(Math.round(4.5)).toBe(5);
    })
  })
});
