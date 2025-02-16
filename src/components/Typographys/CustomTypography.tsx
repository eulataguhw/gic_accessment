import { Typography, TypographyProps } from "@mui/material";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { FormattedMessageType } from "../../types/CommonTypes";

interface ITypography extends TypographyProps {
  message: FormattedMessageType;
}

const CustomTypography = (props: ITypography) => {
  return (
    <Typography
      {...props}
      sx={{ ...props.sx, pointerEvents: "none", whiteSpace: "pre-line" }}
    >
      <FormattedMessage
        id={props.message.id}
        values={props.message.value}
      />
    </Typography>
  );
};

export { CustomTypography };
