import { hello } from "./hello";

it("says hello", () => {

  expect(hello("Foo")).toBe("Hello, Foo!");
});
