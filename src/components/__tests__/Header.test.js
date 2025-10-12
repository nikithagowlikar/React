import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should contain submit button", () => {
  //rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //querying
  const loginButton = screen.getByRole("button", { name: "Login" });
  //assertion
  expect(loginButton).toBeInTheDocument();
});
it("should contain zero items in the card", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //querying
  let cartZero=screen.getByText(/cart/)
  //assertion
  expect(cartZero).toBeInTheDocument()
});
it("should test login-logout click in the card", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //querying
  let loginButton=screen.getByRole("button",{name:'Login'})
  fireEvent.click(loginButton)
  let logoutButton=screen.getByRole('button',{name:'Logout'})
  //assertion
  expect(logoutButton).toBeInTheDocument()
});
