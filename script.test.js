const { s0, s1, s2, s3, s4 } = require("./script");

test("s0(1,10) => 1.84", () => {
   expect(s0(1, 10)).toBeCloseTo(1.84, 2);
});
test("s1(1,10) => 1.84", () => {
   expect(s1(1, 10)).toBeCloseTo(1.84, 2);
});
test("s2(10,10) => 1.84", () => {
   expect(s2(10, 10)).toBeCloseTo(1.84, 2);
});
test("s3(10,10,0) => 1.84", () => {
   expect(s3(1, 10, 0)).toBeCloseTo(1.84, 2);
});
test("s4(10,10,0) => 1.84", () => {
   expect(s4(10, 10, 0)).toBeCloseTo(1.84, 2);
});
