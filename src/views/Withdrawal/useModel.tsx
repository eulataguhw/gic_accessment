import { useMemo, useState } from "react";
import useController from "./useController";
import { InputAdornment } from "@mui/material";
import React from "react";
import { isValidInput } from "../../utils/numbers";

const useModel = () => {
  const { handleOnChange, handleOnSubmit } = useController();
  const [withdrawalInput, setWithdrawalInput] = useState<number>();
  const withdrawalModel = useMemo(
    () => ({
      withdrawalInput: {
        type: "number",
        required: true,
        message: {
          id: "withdrawal.input.text",
        },
        value: withdrawalInput,
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
        onChange: (e) => {
          const value = +e.target.value;
          const isValid = isValidInput(value);
          if (isValid) {
            setWithdrawalInput(value);
            handleOnChange(value);
          }
        },
      },
      withdrawalButton: {
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
      withdrawalInput,
      setWithdrawalInput,
      isValidInput,
    ],
  );
  return { withdrawalModel };
};

export default useModel;
