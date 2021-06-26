import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "./components/Layout";
import { GridSuperheroes } from "./components/GridSuperheroes";
import imageSuperheroe from "../src/images/img-super.jpeg";

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    getSuperheroes();
  }, []);

  const getSuperheroes = async () => {
    try {
      const { data } = await axios.get(
        `https://www.superheroapi.com/api.php/4284567481606325/search/%20`
      );
      setSuperheroes(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const checkUrlImage = (url) => {
    var img = new Image();
    img.src = url;
    if (img.height === 0) {
      return imageSuperheroe;
    } else {
      return url;
    }
  };

  return (
    <Layout>
      <GridSuperheroes data={superheroes} checkUrlImage={checkUrlImage} />
    </Layout>
  );
}

export default App;
