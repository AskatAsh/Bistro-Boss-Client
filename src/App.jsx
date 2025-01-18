import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AuthProvider>
    </>
  );
}

export default App;
