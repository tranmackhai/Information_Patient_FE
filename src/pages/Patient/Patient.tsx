import React, { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../components/common/Search";
import moment from "moment";
import { usePatient } from "../../hooks/usePatient";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "../../components/common/Title/Title";

const Patient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [current, setCurrent] = useState<any>();
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const { patients, deletePatient, resDeletePatient } = usePatient({
    page,
    pageSize,
  });

  const handleSearch = (keyword: string) => {
    navigate(`?p=${page}&q=${keyword}`);
  };

  const handleConfirm = async () => {
    const id = (current as any)?.id ?? null;
    if (id) {
      try {
        deletePatient(id);
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (resDeletePatient) {
      toast.success("Xoá thành công");
      setCurrent(null);
    }
  }, [resDeletePatient]);

  const handleDeletePatient = async (data: any) => {
    setCurrent(data);
    setOpen(true);
  };

  return (
    <section className="patient">
      <ToastContainer />
      <Title title="Thông tin bệnh nhân" button="Thêm" path="/patient">
        <Search onSearch={handleSearch} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Mã bệnh nhân</TableCell>
                <TableCell align="center">Họ và tên</TableCell>
                <TableCell align="center">Ngày sinh</TableCell>
                <TableCell align="center">Giới tính</TableCell>
                <TableCell align="center">Người giám hộ</TableCell>
                <TableCell align="center">Số điện thoại</TableCell>
                <TableCell align="center">Ngày tạo</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients?.data?.patient?.map((item: any) => {
                return (
                  <TableRow
                    key={item?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" width="100px">
                      {item?.patientCode}
                    </TableCell>
                    <TableCell align="center" width="180px">
                      {item?.fullName}
                    </TableCell>
                    <TableCell align="center" width="100px">
                      {moment(item?.DOB).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="center" width="80px">
                      {item.gender ? (
                        <span style={{ color: "#5cb85c" }}>Nam</span>
                      ) : (
                        <span style={{ color: "#ffbb33" }}>Nữ</span>
                      )}
                    </TableCell>
                    <TableCell align="center" width="180px">
                      {item.guarantor}
                    </TableCell>
                    <TableCell align="center" width="100px">
                      {item.phone}
                    </TableCell>
                    <TableCell align="center" width="120px">
                      {moment(item?.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="center" width="150px">
                      <Tooltip title="Chi tiết bệnh nhân">
                        <IconButton
                          // children="fds"
                          component={Link}
                          to={`/patient/detail/${item?.id}`}
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xoá">
                        <IconButton onClick={() => handleDeletePatient(item)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {open && (
          <ConfirmDialog
            onClose={() => setOpen(false)}
            onConfirm={() => handleConfirm()}
            open={open}
          />
        )}
        {patients?.data?.meta?.totalPatient > 0 && (
          <Pagination
            page={page}
            count={Math.ceil(patients?.data?.meta?.totalPatient / pageSize)}
            shape="rounded"
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              setPage(page);
            }}
            sx={{
              marginTop: "24px",
              ul: { justifyContent: "center" },
            }}
          />
        )}
      </Title>
    </section>
  );
};

export default Patient;
