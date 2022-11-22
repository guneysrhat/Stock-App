import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
//import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {
  //   //! axiosi instance hale getirik uzun yazmaya gerek yok
  //   const dispatch = useDispatch();
  //   const { token } = useSelector((state) => state.auth);
  //   const BASE_URL = "https://14240.fullstack.clarusway.com/";
  //   const getFirms = async () => {
  //     const url = "firms";
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       dispatch(getSuccess({ data, url }));
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       console.log(error);
  //     }
  //   };

  const { getFirms } = useStockCall();
  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
