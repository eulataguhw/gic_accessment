import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingScreen from "./views/LandingScreen/LandingScreen";
import Deposit from "./views/Deposit/Deposit";
import { Error404 } from "./Error404";
import BaseContainer from "./views/BaseContainer";
import Withdrawal from "./views/Withdrawal/Withdrawal";
import PrintStatement from "./views/PrintStatement/PrintStatement";
import Quit from "./views/Quit/Quit";
import { ThemeProvider } from "@emotion/react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import theme from "./components/themes";
import { store } from "./store/store";
import intl from "./shared/intl.json";

function App() {
  return (
    <Provider store={store}>
      <IntlProvider
        messages={intl}
        locale="en"
        defaultLocale="en"
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<BaseContainer />}
              >
                <Route
                  path="/deposit"
                  element={<Deposit />}
                />
                <Route
                  path="/withdrawal"
                  element={<Withdrawal />}
                />
                <Route
                  path="/printStatement"
                  element={<PrintStatement />}
                />
                <Route
                  path="/landing"
                  element={<LandingScreen />}
                />
                <Route
                  path="/quit"
                  element={<Quit />}
                />
              </Route>

              <Route
                path="/*"
                element={<Error404 />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
}

export default App;

