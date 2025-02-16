import React from "react";
import { ContentContainer, TextButton, TextInput } from "../../components/";
import useModel from "./useModel";
import { Box, ButtonProps, FormControl } from "@mui/material";

const Withdrawal = () => {
  const { withdrawalModel } = useModel();
  return (
    <ContentContainer>
      <Box sx={{ textAlign: "center" }}>
        <FormControl>
          <TextInput {...withdrawalModel.withdrawalInput} />
          <TextButton
            {...(withdrawalModel.withdrawalButton as ButtonProps)}
            sx={{ marginLeft: 1, marginTop: 1 }}
          />
        </FormControl>
      </Box>
    </ContentContainer>
  );
};

export default Withdrawal;
