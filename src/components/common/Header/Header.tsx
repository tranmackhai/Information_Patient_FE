import React, { useState } from "react";
import { Box, Button, Container, Popper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../apis/modules/auth.api";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | (EventTarget & Element)>(
    null
  );
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogout = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      // const res = await authApi.logout();
      // if (res.response.data.message === "Đăng xuất thành công") {
      //   navigate("/");
      // }
    } catch (error) {}
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <header>
      <Container disableGutters={true} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: "110px",
            img: {
              borderRadius: "50%",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "12px 0",
              a: {
                img: {
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                },
              },
            }}
          >
            <Link to="/">
              <img src="https://res.cloudinary.com/dhypn6jgk/image/upload/v1704875185/Children%27s%20Hopital%202/Image/kmzluzr4h43fxkoyorxj.png" />
            </Link>
          </Box>
          <Box>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "rgb(94, 53, 177)",
                fontWeight: "700",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgb(94, 53, 177, 0.9)",
                },
              }}
            >
              Admin
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  marginTop: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  padding: "8px 18px",
                  backgroundColor: "#fff",
                  a: {
                    color: "rgb(94, 53, 177)",
                    fontWeight: "500",
                  },
                }}
              >
                <Link to="/" onClick={handleLogout}>
                  Đăng xuất
                </Link>
              </Box>
            </Popper>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
