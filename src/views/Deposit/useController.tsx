import { useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { deposit } from "../../features/accountSlice";
import { useNavigate } from "react-router";
import { message } from "../../features/messageSlice";

const useController = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnChange = useCallback(
    (amount: number) => {
      setDepositAmount(amount);
    },
    [setDepositAmount],
  );

  const handleOnSubmit = useCallback(() => {
    dispatch(deposit(depositAmount));
    dispatch(
      message({
        id: "deposit.message.after",
        value: { amount: depositAmount.toFixed(2) },
      }),
    );
    navigate("/landing");
  }, [dispatch, depositAmount, message]);
  return { handleOnChange, handleOnSubmit };
};

export default useController;
