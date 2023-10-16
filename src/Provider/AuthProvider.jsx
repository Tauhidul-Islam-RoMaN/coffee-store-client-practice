import { createContext } from "react";
import PropTypes from 'prop-types';


export const MyCreatedContext = createContext()
const AuthProvider = ({ children }) => {

    

    const authInfo = {

    }
    return (
        <MyCreatedContext.Provider value={authInfo}>
            {children}
        </MyCreatedContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;