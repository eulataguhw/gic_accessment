import { Box, BoxProps, Grid2, styled } from "@mui/material";
import React from "react";

interface IContainer extends BoxProps {}

const StyledBox = styled(Box)((_props) => ({
  margin: "5vh 3vh",
}));

const ContentContainer = (props: IContainer) => {
  return (
    <StyledBox sx={props.sx}>
      <Grid2
        alignItems="center"
        justifyContent="center"
        // sx={{ minHeight: "100vh" }}
      >
        {props.children}
      </Grid2>
    </StyledBox>
  );
};

export { ContentContainer };
