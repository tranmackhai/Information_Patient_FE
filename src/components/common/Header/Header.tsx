import React, { useState } from "react";
import { Box, Button, Container, Popper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../apis/modules/auth.api";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | (EventTarget & Element)>(
    null
  );
  const navigate = useNavigate();

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
                  width: 84,
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
            <Box
              sx={{
                cursor: "pointer",
                color: "rgb(64, 224, 58)",
                "&:hover .drop-optione": {
                  display: "block",
                },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                alt="user"
                style={{
                  width: "36px",
                  height: "36px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  ul: {
                    position: "absolute",
                    color: "#000",
                    fontSize: "1rem",
                    fontWeight: "500",
                    minWidth: "172px",
                    backgroundColor: "#fff",
                    right: "15%",
                    zIndex: "1",
                    top: "80px",
                    display: "none",
                    margin: "0",
                    padding: "0",
                    borderRadius: "4px",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                    "&::after": {
                      content: `""`,
                      position: "absolute",
                      width: "60px",
                      backgroundColor: "transparent",
                      height: "18px",
                      top: "-15px",
                      right: "35%",
                    },
                  },
                  li: {
                    padding: "8px 4px",
                  },
                  a: {
                    color: "#000",
                    "&:hover": {
                      color: "rgb(64, 224, 58)",
                    },
                  },
                  span: {
                    margin: "0 8px",
                    "&:hover": {
                      color: "rgb(64, 224, 58)",
                    },
                  },
                }}
              >
                <ul className="drop-optione">
                  <li>
                    <Link to={"patient/update-password"}>
                      <span>
                        <PasswordIcon
                          sx={{
                            transform: "translateY(4px)",
                          }}
                        />
                      </span>
                      Đổi mật khẩu
                    </Link>
                  </li>
                  <li>
                    <Link to={"user/change-password"}>
                      <span>
                        <LogoutIcon
                          fontSize="small"
                          sx={{
                            transform: "translateY(4px)",
                          }}
                        />
                      </span>
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
