import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Chards from "../components/Chards";
import KpiCards from "../components/KpiCards";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getSales, getPurchases } = useStockCalls();
  useEffect(() => {
    getPurchases();
    getSales();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KpiCards />
      <Chards />
    </Box>
  );
};

export default Home;
