import React from "react";
import {
  CommonTable,
  ContentContainer,
  ICommonTableProps,
} from "../../components";
import useModel from "./useModel";
const PrintStatement = () => {
  const { tableModel } = useModel();
  return (
    <ContentContainer>
      <CommonTable {...(tableModel as ICommonTableProps)} />
    </ContentContainer>
  );
};

export default PrintStatement;
