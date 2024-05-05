import { useEffect, useState } from "react";
import "./authStyle.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "./AuthSlice";

const Auth = () => {
  const [sign, setSign] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <main>
        <section className="container">
          <button className="login" onClick={() => setSign(true)}>
            Login
          </button>
          <button className="register" onClick={() => setSign(false)}>
            Register
          </button>
          {sign ? (
            <form
              action="signIn"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(signIn({ email, password })).catch((err) =>
                  console.log(err)
                );
              }}
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
                value={email}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Password"
                value={password}
              />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form
              action="signUp"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(signUp({ email, password, name, rpassword })).catch(
                  (err) => console.log(err)
                );
              }}
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
                value={email}
              />
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                value={name}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Password"
                value={password}
              />
              <input
                onChange={(e) => setRpassword(e.target.value)}
                type="password"
                id="rpassword"
                placeholder="Repeat Password"
                value={rpassword}
              />
              <button type="submit">Register</button>
            </form>
          )}
        </section>
      </main>
    </>
  );
};

export default Auth;
