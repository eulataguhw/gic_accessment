import { render } from "@testing-library/react";
import { test } from "vitest";
import React from "react";
import App from "./App";

test("renders react", () => {
  render(<App />);
});

