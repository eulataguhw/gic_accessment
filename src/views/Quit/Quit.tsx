import React from "react";
import { ContentContainer, CustomTypography } from "../../components/";
import { BANK_NAME } from "../../constants/common";

const Quit = () => {
  return (
    <ContentContainer>
      <CustomTypography
        variant={"h6"}
        align="center"
        message={{ id: "quit.message", value: { bankName: BANK_NAME } }}
        sx={{ maxWidth: "50vw", margin: "0 auto" }}
      />
    </ContentContainer>
  );
};

export default Quit;
