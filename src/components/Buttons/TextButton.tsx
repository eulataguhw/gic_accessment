import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";
import { CustomTypography } from "../Typographys/CustomTypography";
import { FormattedMessageType } from "../../types/CommonTypes";

interface ITextButton extends ButtonProps {
  message?: FormattedMessageType;
}

const StyledTextButton = styled(Button)((_props) => ({}));

const TextButton = (props: ITextButton) => {
  return (
    <StyledTextButton {...props}>
      {props.message ? (
        <CustomTypography
          message={{ id: props.message.id, value: props.message.value }}
        />
      ) : (
        props.children
      )}
    </StyledTextButton>
  );
};

export { TextButton };
