// import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch(`${import.meta.env.VITE_SERVER}/menu`)
  //       .then((res) => res.json())
  //       .then((data) => setMenu(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // return [menu, setMenu];

  const {data: menu = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
      const res = await axiosPublic.get('/menu');
      // console.log(res);
      return res.data;
    }
  })

  return [menu, loading, refetch];
};

export default useGetMenu;
