import "@testing-library/jest-dom";

import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { TextButton } from "../../src/components";

describe("Testing Landing Screen", () => {
  test("initial render", () => {
    const { asFragment } = render(<TextButton>Initial Render</TextButton>);
    expect(asFragment).toMatchSnapshot();
  });
});
