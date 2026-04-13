import React from "react";
import useAppsData from "../../Hooks/useAppsData";
import Container from "../Container/Container";
import { Link, useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";

const AppDetails = () => {
  const { apps, loading } = useAppsData();
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        {/* Back Button */}
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-2 my-5 rounded transition-all duration-300 px-3 py-1 w-fit group hover:text-violet-600"
        >
          <MoveLeft className="group-hover:-translate-x-2 transition-all duration-300" />
          Go Back...
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
