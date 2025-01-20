import { Navigate, useLocation } from "react-router";
import { PropTypes } from 'prop-types';
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/auth/login" state={{from: location}} replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;