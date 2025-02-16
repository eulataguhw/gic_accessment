import { beforeAll, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../src/App";

describe("Testing Landing Screen", () => {
  // beforeEach(() => render(<App />));
  beforeAll(() => render(<App />));
  test("Test banking flow", async () => {
    const user = userEvent.setup();
    const landingScreenMessageEl = screen.getByRole("heading", {
      name: /welcome to awesome gic bank/i,
    });
    expect(landingScreenMessageEl).toBeInTheDocument();

    // deposit flow
    const depositBtnEl = screen.getByRole("button", { name: /deposit/i });
    expect(depositBtnEl).toBeInTheDocument();
    await user.click(depositBtnEl);
    const depositInputEl = screen.getByRole("spinbutton");
    expect(depositInputEl).toBeInTheDocument();
    await user.type(depositInputEl, "1234.30");
    expect(Number((depositInputEl as HTMLInputElement).value).toFixed(2)).toBe(
      "1234.30",
    );
    const depositSubmitBtnEl = screen.getByRole("button", { name: /submit/i });
    await user.click(depositSubmitBtnEl);
    const depositResultMsgEl = screen.getByRole("heading", {
      name: /1234.30/i,
    });
    expect(depositResultMsgEl).toBeInTheDocument();

    // withdrawal flow
    const withdrawalBtnEl = screen.getByRole("button", {
      name: /withdrawal/i,
    });
    expect(withdrawalBtnEl).toBeInTheDocument();
    await user.click(withdrawalBtnEl);
    const withdrawalInputEl = screen.getByRole("spinbutton");
    expect(withdrawalInputEl).toBeInTheDocument();
    await user.type(withdrawalInputEl, "50.30");
    expect(
      Number((withdrawalInputEl as HTMLInputElement).value).toFixed(2),
    ).toBe("50.30");
    const withdrawalSubmitBtnEl = screen.getByRole("button", {
      name: /submit/i,
    });
    await user.click(withdrawalSubmitBtnEl);
    const withdrawalResultMsgEl = screen.getByRole("heading", {
      name: /50.30/i,
    });
    expect(withdrawalResultMsgEl).toBeInTheDocument();

    // print statement flow
    const printStatementBtnEl = screen.getByRole("button", {
      name: /print/i,
    });
    expect(printStatementBtnEl).toBeInTheDocument();
    await user.click(printStatementBtnEl);
    const homeBtn = screen.getByRole("button", {
      name: /awesome gic bank/i,
    });
    await user.click(homeBtn);
    // quit flow
    const quitBtnEl = screen.getByRole("button", { name: /quit/i });
    expect(quitBtnEl).toBeInTheDocument();
    await user.click(quitBtnEl);
    const quitMessageEl = screen.getByRole("heading", {
      name: /thank you/i,
    });
    expect(quitMessageEl).toBeInTheDocument();
  });
  // test("Render Landing Screen", () => {
  //   const landingScreenMessageEl = screen.getByRole("heading", {
  //     name: /welcome to awesome gic bank/i,
  //   });
  //   const withdrawalBtnEl = screen.getByRole("button", {
  //     name: /withdrawal/i,
  //   });
  //   const depositBtnEl = screen.getByRole("button", { name: /deposit/i });
  //   const printStatementBtnEl = screen.getByRole("button", {
  //     name: /print/i,
  //   });
  //   const quitBtnEl = screen.getByRole("button", { name: /quit/i });
  //   expect(landingScreenMessageEl).toBeInTheDocument();
  //   expect(withdrawalBtnEl).toBeInTheDocument();
  //   expect(depositBtnEl).toBeInTheDocument();
  //   expect(printStatementBtnEl).toBeInTheDocument();
  //   expect(quitBtnEl).toBeInTheDocument();
  // });
  // test("test on click of any button to route", async () => {
  //   const quitBtnEl = screen.getByRole("button", { name: /quit/i });
  //   await userEvent.click(quitBtnEl);
  //   const quitMessageEl = screen.getByRole("heading", {
  //     name: /thank you/i,
  //   });
  //   expect(quitMessageEl).toBeInTheDocument();
  // });
});
