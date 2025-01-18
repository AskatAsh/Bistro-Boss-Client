import { useEffect, useState } from "react";

const useGetReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_SERVER}/reviews`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return [reviews, setReviews];
};

export default useGetReviews;
