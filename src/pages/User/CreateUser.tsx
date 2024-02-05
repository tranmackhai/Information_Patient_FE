import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useUser } from "../../hooks/useUser";
import TitleBody from "../../components/common/Title/TitleBody";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingButton } from "@mui/lab";

const CreateUser = () => {
  const navigate = useNavigate();
  const { createUser, resCreatePatient } = useUser({});
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [isLoginRequest, setIsLoginRequest] = useState<boolean>(false);
  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const userForm = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự ")
        .required("Bạn phải nhập tên"),
      fullName: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự ")
        .required("Bạn phải nhập tên"),
      password: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự ")
        .required("Bạn phải nhập mật khẩu"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      // setIsLoginRequest(true);
      try {
        const formData = {
          userName: values.userName,
          password: values.password,
          fullName: values.fullName,
          role: "USER",
        };
        // call action from hook useUser
        createUser({
          payload: formData,
        });
        // setIsLoginRequest(false);
      } catch (error) {
        // setErrorMessage()
      }
    },
  });

  useEffect(() => {
    if (resCreatePatient) {
      toast.success("Thêm thành công");
    }
  }, [resCreatePatient]);

  return (
    <Box component="form" onSubmit={userForm.handleSubmit}>
      <ToastContainer />
      <TitleBody title="Thêm Tài khoản" />
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="Nhập họ và tên"
          name="fullName"
          fullWidth
          value={userForm.values.fullName}
          onChange={userForm.handleChange}
          color="success"
          error={
            userForm.touched.fullName && userForm.errors.fullName !== undefined
          }
          helperText={userForm.touched.fullName && userForm.errors.fullName}
        />
        <TextField
          type="text"
          placeholder="Nhập tên đăng nhập"
          name="userName"
          fullWidth
          value={userForm.values.userName}
          onChange={userForm.handleChange}
          color="success"
          error={
            userForm.touched.userName && userForm.errors.userName !== undefined
          }
          helperText={userForm.touched.userName && userForm.errors.userName}
        />
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            fullWidth
            placeholder="Nhập mật khẩu"
            color="success"
            type={showPassword ? "text" : "password"}
            value={userForm.values.password}
            onChange={(e) => {
              userForm.setFieldValue("password", e.target.value);
            }}
            error={
              userForm.touched.password &&
              userForm.errors.password !== undefined
            }
            // helperText={
            //   userForm.touched.password && userForm.errors.password
            // }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1wc848c-MuiFormHelperText-root">
            {userForm.touched.password && userForm.errors.password}
          </p>
        </FormControl>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              span: {
                display: "block",
                textAlign: "center",
                margin: "0 4px",
                width: "140px",
                padding: "8px 0",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#f8f8f8",
              },
            }}
          ></Box>
        </Box>
        <Typography sx={{ fontSize: "0.9rem", color: "red" }}>
          {errorMessage}
        </Typography>
        <LoadingButton
          type="submit"
          size="medium"
          color="success"
          loading={isLoginRequest}
          variant="contained"
          sx={{
            fontWeight: "700",
            maxWidth: "120px",
          }}
        >
          Thêm
        </LoadingButton>
        {errorMessage && (
          <Box sx={{ marginTop: 2 }}>
            <Alert severity="error" variant="outlined">
              {errorMessage}
            </Alert>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default CreateUser;
