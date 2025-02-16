import { styled, Card, Box, AppBar, Toolbar, Grid2 } from "@mui/material";
import { CustomTypography } from "../components";
import { BANK_NAME } from "../constants/common";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const StyledCardContainer = styled(Card)((_props) => ({
  borderRadius: "20px",
}));

const BaseContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/landing");
  }, []);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="button"
            sx={{ background: "inherit", border: "none" }}
            onClick={() => navigate("/landing")}
          >
            <CustomTypography
              color="white"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              message={{
                id: "header.bankName",
                value: { bankName: BANK_NAME },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, p: 2 }}>
        <Grid2
          container
          spacing={2}
        >
          <StyledCardContainer sx={{ height: "50vh", width: "100%" }}>
            {/* {children} */}
            <Outlet />
          </StyledCardContainer>
        </Grid2>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <CustomTypography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          message={{ id: "footer.bankName", value: { bankName: BANK_NAME } }}
        />
      </Box>
    </Box>
  );
};

export default BaseContainer;
