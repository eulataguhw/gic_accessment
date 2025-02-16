import React from "react";
import { CommonTable, ContentContainer } from "../../components";
import useModel from "./useModel";
const PrintStatement = () => {
  const { tableModel } = useModel();
  return (
    <ContentContainer>
      <CommonTable {...(tableModel as any)} />
    </ContentContainer>
  );
};

export default PrintStatement;
