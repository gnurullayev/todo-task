import React from "react";
import { publicRoutes } from "./routes";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      {publicRoutes.map((el) => (
        <React.Fragment key={el.path}>
          <Route path={el.path} element={<el.element />} />
        </React.Fragment>
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
