import RestaurantContainer from "../RestaurantContainer";
import MOCK_DATA from "../mocks/restMockData.json";
import { render, act, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the component with search", async () => {
  //rendering
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    );
  });
  //   querying
  const searchButton = screen.getByTestId("seachbtn");
  const searchInputField = screen.getByTestId("seachField");
  fireEvent.change(searchInputField, { target: { value: "burger" } });
  fireEvent.click(searchButton);
  const cardNo = screen.getAllByTestId("cardItem");
  expect(cardNo?.length).toBe(1);
});
