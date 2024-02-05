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
import { useAddress } from "../../hooks/useAddress";
import { usePatient } from "../../hooks/usePatient";
import TitleBody from "../../components/common/Title/TitleBody";

type AddressLevel = {
  id: string;
  name: string;
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
  const {
    patient,
    createPatient,
    resCreatePatient,
    updatePatient,
    resUpdatePatient,
  } = usePatient({
    id,
  });

  const [provinceId, setProvinceId] = useState<string | undefined>(undefined);
  const [districtId, setDistrictId] = useState<string | undefined>(undefined);
  const [wardId, setWardId] = useState<string | undefined>(undefined);

  const {
    provinces,
    districtByProvince,
    refetchDistrictByProvince,
    wardsByDistrict,
    refetchWardsByDistrict,
  } = useAddress({
    provinceId,
    districtId,
  });
  const patientForm = useFormik({
    initialValues: {
      patientCode: patient?.data ? patient.data.patientCode : "",
      fullName: patient?.data ? patient.data.fullName : "",
      DOB: patient?.data ? dayjs(patient.data.DOB) : dayjs("01/01/2005"),
      gender: patient?.data ? patient?.data?.gender : true,
      guarantor: patient?.data ? patient.data.guarantor : "",
      phone: patient?.data ? patient.data.phone : "",
      address: patient?.data ? patient.data.address : "",
      provinceId: patient?.data ? patient.data?.provinceId : "",
      districtId: patient?.data ? patient.data?.districtId : "",
      wardId: patient?.data ? patient.data?.wardId : "",
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
    }),
    enableReinitialize: patient ? true : false,
    // enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("submit", values.gender);
      try {
        if (id) {
          const formData = {
            patientCode: values.patientCode,
            fullName: values.fullName,
            DOB: new Date(values.DOB.format("MM/DD/YYYY")),
            gender: values.gender,
            guarantor: values.guarantor,
            phone: values.phone,
            address: values.address,
            addressLevelIds: [provinceId, districtId, wardId] as string[],
          };
          updatePatient({ id, payload: formData });
        } else {
          const formData = {
            patientCode: values.patientCode,
            fullName: values.fullName,
            DOB: new Date(values.DOB.format("MM/DD/YYYY")),
            gender: values.gender,
            guarantor: values.guarantor,
            phone: values.phone,
            address: values.address,
            addressLevelIds: [provinceId, districtId, wardId] as string[],
          };
          createPatient({ payload: formData });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (resCreatePatient) {
      toast.success("Thêm thành công");
    }
  }, [resCreatePatient]);

  useEffect(() => {
    if (resUpdatePatient) {
      toast.success("Cập nhật thông tin thành công");
    }
  }, [resUpdatePatient]);

  useEffect(() => {
    if (provinceId) {
      refetchDistrictByProvince();
    }
    if (districtId) {
      console.log({ districtId });
      refetchWardsByDistrict();
    }
  }, [
    provinceId,
    districtId,
    wardId,
    refetchDistrictByProvince,
    refetchWardsByDistrict,
  ]);

  useEffect(() => {
    // console.log({ data: patient?.data });
    setProvinceId(patient?.data?.provinceId);
    setDistrictId(patient?.data?.districtId);
    setWardId(patient?.data?.wardId);
    // setProvinceId(patient?.data.provinceId);
    // setDistrictId(patient?.data.districtId);
    // setWardId(patient?.data.wardId);
  }, [patient]);

  useEffect(() => {
    patientForm.setFieldValue("districtId", patient?.data?.districtId);
  }, [districtByProvince]);

  useEffect(() => {
    patientForm.setFieldValue("wardId", patient?.data?.wardId);
  }, [wardsByDistrict]);

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
              label="Tỉnh thành"
              value={patientForm.values.provinceId}
              onChange={(e: any) => {
                patientForm.setFieldValue("provinceId", e.target.value);
                setProvinceId(e.target.value);
              }}
            >
              {provinces?.data?.map((item: AddressLevel) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
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
              label=""
              value={patientForm.values.districtId}
              onChange={(e: any) => {
                patientForm.setFieldValue("districtId", e.target.value);
                setDistrictId(e.target.value);
              }}
            >
              {districtByProvince?.data?.map((item: AddressLevel) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
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
              value={patientForm.values.wardId}
              onChange={(e: any) => {
                patientForm.setFieldValue("wardId", e.target.value);
                setWardId(e.target.value);
              }}
            >
              {wardsByDistrict?.data?.map((item: AddressLevel) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
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
            {<span>{id ? "Cập nhật" : "Thêm mới"}</span>}
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
