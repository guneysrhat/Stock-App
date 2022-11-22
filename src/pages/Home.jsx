import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const { getFirms } = useStockCall();
  useEffect(() => {
    getFirms();
  }, []);

  return <div>Home</div>;
};

export default Home;
