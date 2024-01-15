import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { authApi } from "../../../apis/modules/auth.api";
import * as Yup from "yup";
import { LoginDto } from "../../../types/auth";
import Cookie from "js-cookie";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoginRequest, setIsLoginRequest] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Vui lòng nhập tài khoản"),
      password: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự ")
        .required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: async (values: LoginDto) => {
      try {
        setIsLoginRequest(true);
        const response = await authApi.login({
          password: values.password,
          username: values.username,
        });
        const data = response.data;
        setIsLoginRequest(false);
        if (data.token && data.user) {
          Cookie.set("token", data.token);
          navigate("/");
        }
      } catch (error) {
        setErrorMessage("Tài khoản mật khẩu không chính xác");
        setIsLoginRequest(false);
        console.log(error);
      }
    },
  });

  return (
    <Box component="form" onSubmit={loginForm.handleSubmit}>
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight="700"
          textTransform="uppercase"
          color="rgb(0,125,161)"
        >
          Đăng nhập
        </Typography>
        <TextField
          type="text"
          placeholder="Tên đăng nhập"
          name="username"
          fullWidth
          value={loginForm.values.username}
          onChange={loginForm.handleChange}
          color="success"
          error={
            loginForm.touched.username &&
            loginForm.errors.username !== undefined
          }
          helperText={loginForm.touched.username && loginForm.errors.username}
        />
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            fullWidth
            placeholder="Mật khẩu"
            color="success"
            type={showPassword ? "text" : "password"}
            value={loginForm.values.password}
            onChange={(e) => {
              loginForm.setFieldValue("password", e.target.value);
            }}
            error={
              loginForm.touched.password &&
              loginForm.errors.password !== undefined
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1wc848c-MuiFormHelperText-root">
            {loginForm.touched.password && loginForm.errors.password}
          </p>
        </FormControl>
        <Typography sx={{ fontSize: "0.9rem", color: "red" }}>
          {errorMessage}
        </Typography>
        <LoadingButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          loading={isLoginRequest}
          sx={{
            marginTop: 4,
            backgroundColor: "rgb(0,125,161, 0.9)",
            color: "#fff",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(0,125,161)" },
          }}
        >
          Đăng nhập
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default LoginForm;
