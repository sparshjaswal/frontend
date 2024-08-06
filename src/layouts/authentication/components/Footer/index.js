// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Footer() {
  return (
    <SoftBox
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom={0}
      width="100%"
    >
      <SoftTypography variant="body2" color="secondary">
        &copy; {new Date().getFullYear()} Sparsh Jaswal
      </SoftTypography>
    </SoftBox>
  );
}

export default Footer;
