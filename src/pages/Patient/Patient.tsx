import React from "react";
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
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../components/common/Search";
import Title from "../../components/common/Title";

import moment from "moment";
import { usePatient } from "../../hooks/usePatient";

const Patient = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const { patients } = usePatient({
    page,
    pageSize,
  });

  // console.log(patients?.data?.meta?.totalPatient);

  const handleSearch = (keyword: string) => {
    navigate(`?p=${page}&q=${keyword}`);
  };
  return (
    <section className="patient">
      <Title title="Thông tin bệnh nhân" button="Thêm" path="/patient">
        <Search onSearch={handleSearch} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Mã bệnh nhân</TableCell>
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
                    <TableCell
                      component="th"
                      scope="row"
                      className="line_clamp"
                      width="100px"
                    >
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
                    <TableCell align="center" width="120px">
                      <>
                        <IconButton
                          component={Link}
                          to={`/patient/update/${item?.id}`}
                          onClick={() => {}}
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>
                        <IconButton
                          component={Link}
                          to={`/patient/remove/${item?.id}`}
                          onClick={() => {}}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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
