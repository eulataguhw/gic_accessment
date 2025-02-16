import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { withdrawal } from "../../features/accountSlice";
import { useNavigate } from "react-router";
import { message } from "../../features/messageSlice";

const useController = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const { account } = useAppSelector((store) => store);
  const { balance } = account;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnChange = useCallback(
    (amount: number) => {
      setWithdrawalAmount(amount);
    },
    [setWithdrawalAmount],
  );

  const handleOnSubmit = useCallback(() => {
    const isWithdrawable = withdrawalAmount <= balance;
    if (!isWithdrawable) {
      alert("Not enough funds!");
      return;
    }
    dispatch(withdrawal(withdrawalAmount));
    dispatch(
      message({
        id: "withdrawal.message.after",
        value: { amount: withdrawalAmount.toFixed(2) },
      }),
    );
    navigate("/landing");
  }, [dispatch, navigate, message, withdrawal, withdrawalAmount, balance]);
  return { handleOnChange, handleOnSubmit };
};

export default useController;
