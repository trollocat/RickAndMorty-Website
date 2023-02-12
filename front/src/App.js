import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Form } from "./components/Form/Form";
import { About } from "./components/About/About";
import { Detail } from "./components/Detail/Detail";
import { Favorites } from "./components/Favorites/Favorites";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

export const App = () => {
  let location = useLocation().pathname;
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "trollocat@gmail.com";
  const password = "caca123";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        // mapeo characters a un array de solo sus id, y checkeo si incluyen el data.id
        if (data.name && !characters.map((char) => char.id).includes(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if (data.name) {
          alert("Ese personaje ya existe");
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = (form) => {
    if (form.password === password && form.username === username) {
      setAccess(true);
      navigate("/home");
      console.log("Login exitoso");
    }
  };

  const logout = () => {
    setAccess(true);
    navigate("/");
    console.log("Logged out");
  };

  return (
    <>
      {/* condicional pa que la navbar no aparezca en el login "/" */}
      {location !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="" element={<Form login={login} />} />
        <Route
          path="home"
          element={<Home onClose={onClose} characters={characters} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
