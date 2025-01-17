import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
