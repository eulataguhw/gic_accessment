import * as React from "react";
import Input, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material";
import { CustomTypography } from "../Typographys/CustomTypography";
import { FormattedMessageType } from "../../types/CommonTypes";

const StyledTextField = styled(Input)({
  width: "40vw",
  "& .MuiFormLabel-root": {
    display: "flex",
  },
});

interface ITextInput {
  message?: FormattedMessageType;
}

const TextInput = (props: ITextInput & TextFieldProps) => {
  return (
    <StyledTextField
      label={
        <CustomTypography
          message={{ id: props.message.id, value: props.message.value }}
        />
      }
      name={props.name}
      variant="standard"
      focused={true}
      fullWidth
      {...props}
    />
  );
};

export { TextInput };
