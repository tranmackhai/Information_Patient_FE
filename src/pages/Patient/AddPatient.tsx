import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { usePatient } from "../../hooks/usePatient";
import TitleBody from "../../components/common/Title/TitleBody";
import provinces from "../../json/address.json";

type Ward = {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
};

type District = {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards: Ward[];
};

const gender = [
  {
    label: "Nam",
    value: true,
  },
  {
    label: "Nữ",
    value: false,
  },
];

const AddPatient = () => {
  const { id } = useParams();
  const { patient, createPatient, resCreatePatient } = usePatient({
    id: id ? parseInt(id) : undefined,
  });

  const patientForm = useFormik({
    initialValues: {
      patientCode: "",
      fullName: "",
      DOB: dayjs("01/01/2005"),
      gender: true,
      guarantor: "",
      phone: "",
      address: "",
      province: "",
      district: "",
      ward: "",
    },
    validationSchema: Yup.object({
      patientCode: Yup.string()
        .max(14, "Mã bệnh nhân tối đa 14 số ")
        .required("Vui lòng nhập mã bệnh nhân"),
      fullName: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự ")
        .required("Vui lòng nhập tên bệnh nhân"),
      guarantor: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự")
        .required("Vui lòng nhập tên người giám hộ"),
      phone: Yup.string()
        .min(10, "Số điện thoại không hợp lệ")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Số điện thoại không hợp lệ"
        )
        .required("Vui lòng nhập số điện thoại"),
      province: Yup.string().required("Vui lòng chọn Tỉnh thành"),
      district: Yup.string().required("Vui lòng chọn Quận huyện"),
      ward: Yup.string().required("Vui lòng chọn Phường-Xã"),
      address: Yup.string().required("Vui lòng nhập số nhà, tên đường"),
    }),
    enableReinitialize: patient ? true : false,
    // enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("submit", values.gender);
      try {
        const formData = {
          patientCode: values.patientCode,
          fullName: values.fullName,
          DOB: new Date(values.DOB.format("MM/DD/YYYY")),
          gender: values.gender,
          guarantor: values.guarantor,
          phone: values.phone,
          address: values.address,
          province: values.province,
          district: values.district,
          ward: values.ward,
        };
        createPatient({ payload: formData });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const handleChangeProvinces = (e: any) => {
    const value = e.target.value;
    const province = provinces.find((item) => item.name === value);
    console.log(province, value);
    patientForm.setFieldValue("province", value);
    if (province) {
      setDistricts(province.districts);
    }
  };

  const handleChangeDistricts = (e: any) => {
    const value = e.target.value;
    patientForm.setFieldValue("district", value);
    const district = districts.find((item) => item.name === value);
    if (district) {
      setWards(district.wards);
    }
  };

  useEffect(() => {
    if (resCreatePatient) {
      toast.success("Thêm thành công");
    }
  }, [resCreatePatient]);

  // console.log("🚀 ~ CreatePatient ~ data:", patientForm);

  return (
    <Box component="form" onSubmit={patientForm.handleSubmit}>
      <ToastContainer />
      <TitleBody title="Thêm thông tin bệnh nhân" />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Mã bệnh nhân"
              name="patientCode"
              fullWidth
              value={patientForm.values.patientCode}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.patientCode &&
                patientForm.errors.patientCode !== undefined
              }
              helperText={
                patientForm.touched.patientCode &&
                (patientForm.errors.patientCode as React.ReactNode)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Tên bệnh nhân"
              name="fullName"
              value={patientForm.values.fullName}
              onChange={patientForm.handleChange}
              color="success"
              fullWidth
              error={
                patientForm.touched.fullName &&
                patientForm.errors.fullName !== undefined
              }
              helperText={
                patientForm.touched.fullName &&
                (patientForm.errors.fullName as React.ReactNode)
              }
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              ".MuiStack-root": {
                paddingTop: "0 !important",
              },
              label: {
                paddingTop: "7px !important",
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  justifyContent: "center",
                }}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  label="Ngày sinh"
                  value={patientForm.values.DOB}
                  onChange={(newValue: Dayjs | null) =>
                    patientForm.setFieldValue("DOB", newValue)
                  }
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ fontWeight: 500, fontSize: "1rem", marginBottom: "6px" }}
            >
              Giới tính
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                span: {
                  display: "block",
                  textAlign: "center",
                  margin: "0 4px",
                  fontSize: "1rem",
                  width: "60px",
                  padding: "2px 0",
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                },
              }}
            >
              {gender.map((item) => {
                // console.log({
                //   value: item.value,
                //   gender: patientForm.values.gender,
                // });
                return (
                  <span
                    key={item.label}
                    style={
                      item.value === patientForm.values.gender
                        ? {
                            border: "1px solid #fcaf17",
                            backgroundColor: "#fff",
                          }
                        : {}
                    }
                    onClick={() => {
                      patientForm.setFieldValue("gender", item.value);
                    }}
                  >
                    {item.label}
                  </span>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Người giám hộ"
              name="guarantor"
              value={patientForm.values.guarantor}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.guarantor &&
                patientForm.errors.guarantor !== undefined
              }
              helperText={
                patientForm.touched.guarantor &&
                (patientForm.errors.guarantor as React.ReactNode)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Số điện thoại"
              name="phone"
              value={patientForm.values.phone}
              onChange={patientForm.handleChange}
              color="success"
              fullWidth
              error={
                patientForm.touched.phone &&
                patientForm.errors.phone !== undefined
              }
              helperText={
                patientForm.touched.phone &&
                (patientForm.errors.phone as React.ReactNode)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Địa chỉ"
              name="address"
              value={patientForm.values.address}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.address &&
                patientForm.errors.address !== undefined
              }
              helperText={
                patientForm.touched.address &&
                (patientForm.errors.address as React.ReactNode)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              variant="outlined"
              color="success"
              displayEmpty
              value={patientForm.values.province}
              onChange={handleChangeProvinces}
            >
              <MenuItem value="" disabled>
                Chọn Tỉnh/Thành phố
              </MenuItem>
              {provinces?.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              color="success"
              variant="outlined"
              displayEmpty
              value={patientForm.values.district}
              onChange={handleChangeDistricts}
            >
              <MenuItem value="" disabled>
                Chọn Quận/Huyện
              </MenuItem>
              {districts.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              variant="outlined"
              color="success"
              value={patientForm.values.ward}
              name="ward"
              displayEmpty
              onChange={patientForm.handleChange}
            >
              <MenuItem value="" disabled>
                Chọn Phường/Xã
              </MenuItem>
              {wards.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
        </Grid>
        <Box
          display="flex"
          paddingBottom="24px"
          justifyContent="right"
          marginTop={"20px"}
        >
          <button
            type="submit"
            style={{
              width: "120px",
              padding: "10px 0",
              borderRadius: "4px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "rgb(64, 224, 58)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              textTransform: "uppercase",
              marginRight: "12px",
            }}
          >
            Thêm mới
          </button>
          <button
            type="button"
            style={{
              width: "120px",
              padding: "10px 0",
              borderRadius: "4px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "rgb(174 167 167)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              textTransform: "uppercase",
            }}
            onClick={() => {}}
          >
            Huỷ
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default AddPatient;
