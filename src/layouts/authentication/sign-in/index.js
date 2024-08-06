import { useState } from "react";
import axios from "axios";
import API_URLS from "../../../utils/apiURLS";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import BasicLayout from "layouts/authentication/components/BasicLayout";
import { Card } from "@mui/material";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URLS.LOGIN}`, {
        email,
        password,
      });
      // Handle successful login
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <BasicLayout>
      <Card sx={{ padding: 2, margin: 2 }}>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Login
          </SoftTypography>
        </SoftBox>
        <SoftBox component="form" role="form" sx={{ padding: 2 }} onSubmit={handleLogin}>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SoftTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </SoftTypography>
          </SoftBox>
          {error && (
            <SoftBox mt={2} mb={2}>
              <SoftTypography variant="button" color="error" fontWeight="regular">
                {error}
              </SoftTypography>
            </SoftBox>
          )}
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="info" fullWidth type="submit">
              sign in
            </SoftButton>
          </SoftBox>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignIn;
