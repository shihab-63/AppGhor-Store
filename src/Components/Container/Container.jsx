import React, { Children } from "react";

const Container = ({ children }) => {
  return <div className="container mx-auto px-3 md:px-0">{children}</div>;
};

export default Container;
