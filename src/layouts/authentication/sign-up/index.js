import { useState } from "react";
import axios from "axios";
import API_URLS from "../../../utils/apiURLS";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

function SignUp() {
  const [agreement, setAgreement] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSetAgreement = () => setAgreement(!agreement);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreement) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    try {
      const response = await axios.post(`${API_URLS.REGISTER}`, form);
      if (response.data.success) {
        // Redirect or show success message
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <BasicLayout>
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSubmit}>
            <SoftBox mb={2}>
              <SoftInput name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </SoftBox>
            {error && (
              <SoftBox mb={2}>
                <SoftTypography variant="caption" color="error">
                  {error}
                </SoftTypography>
              </SoftBox>
            )}
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgreement} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgreement}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth type="submit">
                Sign Up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign In
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
