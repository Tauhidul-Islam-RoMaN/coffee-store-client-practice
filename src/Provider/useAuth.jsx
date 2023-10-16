import { useContext } from "react";
import { MyCreatedContext } from "./AuthProvider";

const useAuth = () => {
    const customHook = useContext(MyCreatedContext)
    return customHook
};

export default useAuth;