import { useState, useEffect } from "react";
import { axiosConfig } from "../utils/apiClient";

type Plan = {
  id: string;
  network: string;
  amount: number;
};

export default function usePlans() {
  const [plansData, setPlans] = useState<Record<string, Plan[]>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Plans
  const fetchPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosConfig.get("/plans"); // Replace with actual API
      setPlans(response.data.data);
    } catch (err) {
      setError("Failed to fetch plans");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return { plansData, loading, error, fetchPlans };
}
