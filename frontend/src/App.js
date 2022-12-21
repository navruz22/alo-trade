import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { getUser } from "./Pages/Sign/signSlice";

// pages
const PageRoutes = lazy(() => import("./Pages/PageRoutes"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("_grecaptcha"));
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div className="font-amazon">
      <Suspense fallback={<Loader />}>
        <PageRoutes />
      </Suspense>
    </div>
  );
}

export default App;
