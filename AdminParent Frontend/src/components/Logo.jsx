import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <img
          src="/static/login.jpg"
          alt="logo"
          style={{
            width: '180px', // Adjust the width as per your requirement
            height: 'auto', // The height will adjust proportionally based on the width
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;


