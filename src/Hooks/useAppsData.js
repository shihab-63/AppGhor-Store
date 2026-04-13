import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppsData = async () => {
      try {
        const response = await axios("../appsData.json");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setApps(response.data);
      } catch (error) {
        setError(error.message || "Somting want Wrong...");
      } finally {
        setLoading(false);
      }
    };
    fetchAppsData();
  }, []);
  return { apps, loading, error };
};

export default useAppsData;
