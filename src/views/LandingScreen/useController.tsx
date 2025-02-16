import { useCallback } from "react";
import { useNavigate } from "react-router";
import { BUTTON_NAMES } from "../../constants/common";

const useController = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (e) => {
      navigate(`/${e.target.name}`);
    },
    [navigate],
  );
  return { handleOnClick };
};

export default useController;
