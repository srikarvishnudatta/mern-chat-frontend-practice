import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext>({
  username: "",
  setUsername: () => {},
  id: "",
  setId: () => {},
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string>("");
  const [id, setId] = useState<string>("");
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data } = await axios.get("/profile", { withCredentials: true });
        
      if (data || data !== "no token") {
        setUsername(data.username);
        setId(data.id);
      }
      } catch (error) {
        console.log(error);
        navigate('/')
      }
    }
    fetchProfile();
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
