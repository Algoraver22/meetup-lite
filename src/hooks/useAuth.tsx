import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../app/slices/AuthSlice";

export default function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const savedUser = localStorage.getItem("meetup-user");
    if (!savedUser) {
      navigate("/login");
    } else {
      const user = JSON.parse(savedUser);
      dispatch(setUser(user));
    }
  }, [dispatch, navigate]);
}
