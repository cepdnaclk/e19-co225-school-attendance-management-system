import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider, Button } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [parentEmail, setParentEmail] = useState("");
  const [parentPassword, setParentPassword] = useState("");
  const [error, setError] = useState("");

  const handleParentLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/father/getbyemail/${parentEmail}`);
      const user = response.data;
      if (user) {
        const retrievedPassword = user.password;
        if (parentPassword === retrievedPassword) {
          setAuth(true);
          navigate("/dashboard_parent");
        } else {
          setError("Invalid parent password");
        }
      } else {
        setError("User not found");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  const handleLoginFormSubmit = (email, password) => {
    setParentEmail(email);
    setParentPassword(password);
  };

  return (
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Logo />
              <Typography sx={{ color: "text.secondary", mb: 5 }}>
                Login to your account
              </Typography>
            </HeadingStyle>

            <Box component={motion.div} {...fadeInUp}>
              <SocialAuth />
            </Box>

            <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR
              </Typography>
            </Divider>

            <LoginForm onSubmit={handleLoginFormSubmit} />

            <Box fullWidth height={20} />

            <Button
                variant="contained"
                color="primary"
                sx={{ height: 45 }}
                onClick={handleParentLogin}
            >
              Login as parent
            </Button>

            {error && (
                <Typography
                    variant="body2"
                    color="error"
                    align="center"
                    sx={{ mt: 2 }}
                >
                  {error}
                </Typography>
            )}

            <Typography
                component={motion.p}
                {...fadeInUp}
                variant="body2"
                align="center"
                sx={{ mt: 3 }}
            >
              Don’t have an account?{" "}
              <Link variant="subtitle2" component={RouterLink} to="/signup">
                Sign up
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
  );
};

export default Login;
