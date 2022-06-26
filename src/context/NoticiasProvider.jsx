import { useState, useEffect, createContext } from "react";

//Create context
const NoticiasContext = createContext();

//Create provider
const NoticiasProvider = ({ children }) => {
  //State
  const [categoria, setCategoria] = useState("general");
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    }

  //Effect


    useEffect(() => {
        const getNoticias = async () => {
            const API = "f7307119d7344fdf8f553ee556e83cff"
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${API}`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();

            setNoticias(data.articles);
            setTotalPaginas(data.totalResults);
            setPagina(1);
        }
        getNoticias();
    },[categoria]);


    useEffect(() => {
        const getNoticias = async () => {
            const API = "f7307119d7344fdf8f553ee556e83cff"
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${API}`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();

            setNoticias(data.articles);
            setTotalPaginas(data.totalResults);
        }
        getNoticias();
    },[pagina]);

   


  //Return provider
  return (
    <NoticiasContext.Provider
      value={{
                categoria,
                setCategoria,
                handleChangeCategoria,
                noticias,
                totalPaginas,
                handleChangePagina,
                setPagina,
                pagina
            }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export {  NoticiasProvider  };

export default NoticiasContext;