import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/Main/MainPage";
import { useEffect } from "react";
import { checkUser } from "./components/Auth/AuthSlice";

function App() {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    if (!user) {
      dispatch(checkUser());
    }
  }, [user]);


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Auth />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
