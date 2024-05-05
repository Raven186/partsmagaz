import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../Auth/AuthSlice";
import style from "./NavBarStyle.module.css";

const NavBar = () => {
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <header className={style.header}>
        <main className={style.container}>
          <div className={style.logo}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/186/186308.png"
              alt="logo"
              className={style.logo_img}
            />
          </div>
          <ul className={style.nav_ul}>
            {user ? (
              <>
                <li className={style.nav_li}>
                  <NavLink to="/main">Home</NavLink>
                </li>
                <li className={style.nav_li}>
                  <NavLink to="/basket">Basket</NavLink>
                </li>
                <li className={style.nav_li}>
                  <NavLink to="/orders">Orders</NavLink>
                </li>
                <li className={style.nav_li}>
                  <NavLink to="/profile">
                    <img className={style.logo_avatar} src={user.avatar} />
                  </NavLink>
                </li>
                <li
                  className={style.nav_li}
                  onClick={() => {
                    dispatch(logout()).catch(console.log);
                    navigate("/");
                  }}
                >
                  <NavLink to="/">Logout</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className={style.nav_li}>
                  <NavLink to="/">Login</NavLink>
                </li>
                <li className={style.nav_li}>
                  <NavLink to="/">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </main>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
