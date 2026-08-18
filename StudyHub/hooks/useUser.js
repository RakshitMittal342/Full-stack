import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export const useUser = () => {
  return useContext(StudentContext);
};
