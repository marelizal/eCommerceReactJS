import React from "react";

const Content = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        minHeight: "85vh",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Content;
