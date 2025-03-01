import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState(location.search);

  useEffect(() => {
    setSearch(location.search);
  }, [location.search]);

  const customNavigate = (path: string, searchData: string) => {
    navigate(`${path}${searchData}`);
  };

  return { customNavigate, search };
};
