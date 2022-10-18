import Navbar from "./Components/Navbar/Navbar";
import { lazy, useEffect, Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";

// pages
const Login = lazy(() => import("./Pages/Sign/Sign"));
const PageRoutes = lazy(() => import("./Pages/PageRoutes"));

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {token ? <PageRoutes /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
