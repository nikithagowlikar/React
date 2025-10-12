import { render, screen } from "@testing-library/react";
import { sum } from "../sum";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("sum function of two numbers", () => {
  const result = sum(3, 7);
  //Assertion
  expect(result).toBe(10);
});
test("contact component render check", () => {
  //rendering
  render(<Contact />);
  //Querying
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});
test("component render check", () => {
  //rendering
  render(<Contact />);
  //Querying
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});
test("input field incomponent render check", () => {
  //rendering
  render(<Contact />);
  //Querying
  const textBox = screen.getAllByRole("textbox");
  //Assertion
  expect(textBox[0]).toBeInTheDocument();
});
test("input field incomponent render check", () => {
  //rendering
  render(<Contact />);
  //Querying
  const textBox = screen.getAllByRole("textbox");
  //Assertion
  expect(textBox[0]).toBeInTheDocument();
});
test("placeholder in input field", () => {
  render(<Contact />);
  //Querying
  const textB = screen.getAllByRole("textbox");
  expect(textB.length).toBe(2);
});
