import { useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const useSocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSocialLogin = async (provider, path = '/') => {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      let userInfo;

      switch (provider) {
        case "google": {
          //   console.log("Starting Google sign-in...");
          const result = await googleSignIn();
          userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          //   console.log("Google sign-in successful:", userInfo);

          // Save user info to database
          const response = await axiosPublic.post("/users", userInfo);
        //   console.log("User info saved:", response.data);
          if (response.data?.acknowledged) {
            toast.success("User created successfully.", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
              transition: Bounce,
            });
            navigate(path);
          } else if (response.data?.loggedin) {
            toast.success("Successfully logged in.", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
              transition: Bounce,
            });
            navigate(path);
          }
          break;
        }

        case "github":
          // GitHub login
          console.log("GitHub login is not yet implemented.");
          break;

        case "facebook":
          // Facebook login
          console.log("Facebook login is not yet implemented.");
          break;

        default:
          //   console.error("Unsupported login method:", provider);
          setError("Unsupported login method:");
      }
    } catch (err) {
      console.error("Error during social login:", err);
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return { handleSocialLogin, loading, error };
};

export default useSocialLogin;
