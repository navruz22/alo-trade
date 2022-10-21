import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Components/Loader/Loader";
import { getUserType } from "./Pages/Sign/signSlice";

// pages
const Login = lazy(() => import("./Pages/Sign/Sign"));
const PageRoutes = lazy(() => import("./Pages/PageRoutes"));

function App() {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.login);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("_grecaptcha"));
    if (token) {
      dispatch(getUserType());
    }
  }, [dispatch]);

  return (
    <div className="font-amazon">
      <Suspense fallback={<Loader />}>
        {logged ? <PageRoutes /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
