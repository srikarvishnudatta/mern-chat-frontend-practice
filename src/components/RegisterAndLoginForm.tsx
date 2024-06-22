import axios from "axios";
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { UserContext } from "../utils/context/UserContext";

const RegisterAndLoginForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [Rusername, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUsername, setId } = useContext(UserContext);
  const setUser = (ev: ChangeEvent<HTMLInputElement>) => {
    setUserName(ev.target.value);
  };
  const setPass = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  const submitHandler = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const url = isRegister ? "/register" : "/login";
    const res = await axios.post(url, { username: Rusername, password });
    if (res) {
      setUsername(Rusername);
      console.log(res.data);
      setId(res.data);
    }
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={submitHandler}>
        <input
          onChange={setUser}
          value={Rusername}
          type="text"
          name=""
          id=""
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          onChange={setPass}
          value={password}
          type="password"
          name=""
          id=""
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 block w-full text-white rounded-sm p-2">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <div className=" inline-block text-center mt-2">
          Already {isRegister ? "Registered" : "dont have one?"}?{" "}
          <button onClick={() => setIsRegister((prev) => !prev)}>
            Click here
          </button>
        </div>
    </div>
  );
};

export default RegisterAndLoginForm;
