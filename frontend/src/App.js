import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Components/Loader/Loader";
import { getUser } from "./Pages/Sign/signSlice";

// pages
const Login = lazy(() => import("./Pages/Sign/Sign"));
const PageRoutes = lazy(() => import("./Pages/PageRoutes"));

function App() {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.login);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("_grecaptcha"));
    if (userData) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        {logged ? <PageRoutes /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;
