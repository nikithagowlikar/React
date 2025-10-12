import mock from "../mocks/mock.json";
import { render, screen } from "@testing-library/react";
import Card from "../Card";
import "@testing-library/jest-dom";
it("Should contain restaurant card props", () => {
  //render
  render(
    <>
      <Card data={mock} />
    </>
  );

  //querying
  let label = screen.getByText("Mehfil");
  //assertion
  expect(label).toBeInTheDocument();
});
