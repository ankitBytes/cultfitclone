import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotesIcon from "@mui/icons-material/Notes";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextField from "@mui/material/TextField";
import { Select, FormControl, InputLabel, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const pages = ["FITNESS", "CARE", "MIND", "STORE"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const places = [
    "bhubaneswar",
    "cuttack",
    "delhi",
    "noida",
    "bengaluru",
    "hyderabad",
  ];

  const [selectedValue, setSelectedValue] = useState("bhubaneswar");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const styles = {
    left: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              height: "4vh",
            }}
          >
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <NotesIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/care");
                }}
              >
                <Typography textAlign="center">Care</Typography>
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/fitness");
                }}
              >
                <Typography textAlign="center">Fitness</Typography>
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/store");
                }}
              >
                <Typography textAlign="center">Store</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              height: "4vh",
            }}
          >
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
              alt=""
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate("/care");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Care
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate("/fitness");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Fitness
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate("/store");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Store
            </Button>
          </Box>
          <Stack sx={styles.left} direction={"row"} spacing={4}>
            <FormControl
              sx={{
                minWidth: 120,
                border: "none",
                color: "white",
                display: { md: "flex", xs: "none" },
              }}
            >
              <Select
                value={selectedValue}
                onChange={handleChange}
                IconComponent={LocationOnIcon}
                sx={{
                  borderRadius: "1rem",
                  transition: "background 0.4s",
                  color: "white",
                  border: "none",
                  "&:hover": {
                    background: "#ffffff15",
                    border: "none",
                    borderRadius: "1rem",
                  },
                  "&:active": {
                    background: "#ffffff15",
                    border: "none",
                  },
                }}
              >
                <MenuItem value="">None</MenuItem>
                {places.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              sx={{
                color: "white",
                border: "0.1rem solid white",
                transition: "border 0.2s",
                fontWeight: "bold",
                display: { md: "flex", xs: "none" },

                "&:hover": {
                  border: "0.1rem solid grey",
                },
              }}
            >
              GET APP
            </Button>
            <Box sx={{ flexGrow: 0, color: "white" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonIcon fontSize="large" sx={{color: '#fafafa'}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              sx={{ display: { md: "flex", xs: "none" } }}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
