import { useEffect, useState } from "react"
import getImages from "../helpers/getImages";

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });


  useEffect(() => {

    getImages(category)
      .then(imgs => setState({
        data: imgs,
        loading: false
      }));

  }, [category]);



  return state;
}