import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useIsAdmin from "../Hooks/useIsAdmin";
import { PropTypes } from "prop-types";

const AdminRoute = (children) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useIsAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.object,
};

export default AdminRoute;
