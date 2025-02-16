import { useAppSelector } from "../../hooks/hooks";

const useModel = () => {
  const { account } = useAppSelector((store) => store);
  const { transactions } = account;
  const tableModel = {
    rows: transactions.map((transaction) => ({
      name: transaction.id,
      cell: [
        { data: { value: transaction.timestamp, type: "date" }, sx: {} },
        { data: { value: transaction.amount, type: "amount" }, sx: {} },
        { data: { value: transaction.balance, type: "amount" }, sx: {} },
        // { data: { value: transaction.type, type: "text" }, sx: {} },
      ],
      sx: {},
    })),
    headers: [
      { title: "Date", sx: {} },
      { title: "Amount", sx: {} },
      { title: "Balance", sx: {} },
      // { title: "Type", sx: {} },
    ],
  };
  return { tableModel };
};

export default useModel;
