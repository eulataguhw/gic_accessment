import React from "react";
import { ContentContainer, TextButton, TextInput } from "../../components/";
import useModel from "./useModel";
import { Box, ButtonProps, FormControl } from "@mui/material";

const Deposit = () => {
  const { depositModel } = useModel();
  return (
    <ContentContainer>
      <Box sx={{ textAlign: "center" }}>
        <FormControl>
          <TextInput {...depositModel.depositInput} />
          <TextButton
            {...(depositModel.depositButton as ButtonProps)}
            sx={{ marginLeft: 1, marginTop: 1 }}
          />
        </FormControl>
      </Box>
    </ContentContainer>
  );
};

export default Deposit;
