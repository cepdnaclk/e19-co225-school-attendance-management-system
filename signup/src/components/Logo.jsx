<<<<<<< HEAD
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


=======
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="/static/icon_logo.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
=======
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="/static/icon_logo.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
>>>>>>> b4244ceba429206da30718c5b186972bbafcca9b
>>>>>>> 0b90445a596e529a558dcc10d4ccc3cb1809ade9
