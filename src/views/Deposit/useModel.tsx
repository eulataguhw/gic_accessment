import { useMemo, useState } from "react";
import useController from "./useController";
import { InputAdornment } from "@mui/material";
import React from "react";
import { isValidInput } from "../../utils/numbers";

const useModel = () => {
  const { handleOnChange, handleOnSubmit } = useController();
  const [depositInput, setDepositInput] = useState<number>();
  const depositModel = useMemo(
    () => ({
      depositInput: {
        type: "number",
        required: true,
        message: {
          id: "deposit.input.text",
        },
        value: depositInput,
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
        onChange: (e) => {
          const value = +e.target.value;
          const isValid = isValidInput(value);
          if (isValid) {
            setDepositInput(value);
            handleOnChange(value);
          }
        },
      },
      depositButton: {
        variant: "contained",
        message: {
          id: "button.submit",
        },
        onClick: handleOnSubmit,
        sx: {},
      },
    }),
    [
      handleOnChange,
      handleOnSubmit,
      depositInput,
      setDepositInput,
      isValidInput,
    ],
  );
  return { depositModel };
};

export default useModel;
