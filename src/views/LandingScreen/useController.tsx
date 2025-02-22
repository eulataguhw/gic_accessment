import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { initialState, message } from "../../features/messageSlice";

const useController = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = useCallback(
    (e) => {
      navigate(`/${e.target.name}`);
      dispatch(message(initialState));
    },
    [navigate],
  );
  return { handleOnClick };
};

export default useController;
