import { useState } from "react";
import { useEffect } from "react";

const useGetMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_SERVER}/menu`)
        .then((res) => res.json())
        .then((data) => setMenu(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return [menu, setMenu];
};

export default useGetMenu;
