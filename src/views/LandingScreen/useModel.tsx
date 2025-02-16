import { useMemo } from "react";
import useController from "./useController";
import { BUTTON_NAMES } from "../../constants/common";

const useModel = (props?: any) => {
  const { handleOnClick } = useController();
  const buttonModel = useMemo(
    () => [
      {
        variant: "contained",
        color: "primary",
        message: { id: "button.withdrawal" },
        name: BUTTON_NAMES.WITHDRAWAL,
        onClick: (e) => handleOnClick(e),
        sx: {},
      },
      {
        variant: "contained",
        color: "primary",
        message: { id: "button.deposit" },
        name: BUTTON_NAMES.DEPOSIT,
        onClick: (e) => handleOnClick(e),
        sx: {},
      },
      {
        variant: "contained",
        color: "primary",
        message: { id: "button.printStatement" },
        name: BUTTON_NAMES.PRINT_STATEMENT,
        onClick: (e) => handleOnClick(e),
        sx: {},
      },
      {
        variant: "contained",
        color: "primary",
        message: { id: "button.quit" },
        name: BUTTON_NAMES.QUIT,
        onClick: (e) => handleOnClick(e),
        sx: {},
      },
    ],
    [handleOnClick],
  );
  return { buttonModel };
};

export default useModel;
