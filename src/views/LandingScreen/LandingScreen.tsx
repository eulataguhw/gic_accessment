import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import useModel from "./useModel";
import {
  CustomTypography,
  ContentContainer,
  TextButton,
} from "../../components";
import { useAppSelector } from "../../hooks/hooks";

const LandingScreen = () => {
  const { buttonModel } = useModel();
  const { message } = useAppSelector((store) => store);

  return (
    <ContentContainer>
      <CustomTypography
        variant={"h6"}
        align="center"
        message={message}
        sx={{ maxWidth: "50vw", margin: "0 auto" }}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {buttonModel.map((buttonProps: any) => (
          <TextButton {...buttonProps} />
        ))}
      </Stack>
    </ContentContainer>
  );
};

export default LandingScreen;
