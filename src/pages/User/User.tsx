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
import Title from "../../components/common/Title/Title";

import moment from "moment";
import { useUser } from "../../hooks/useUser";

const User = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const { users } = useUser({
    page,
    pageSize,
  });

  console.log(users?.data?.meta.total);

  const handleSearch = (keyword: string) => {
    navigate(`?p=${page}&q=${keyword}`);
  };

  return (
    <section className="account">
      <Title title="Tài Khoản" button="Thêm tài khoản" path="/account">
        <Search onSearch={handleSearch} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Họ và tên</TableCell>
                <TableCell align="center">Tên đăng nhập</TableCell>
                <TableCell align="center">Ngày tạo</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.data?.user?.map((item: any) => {
                return (
                  <TableRow
                    key={item?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" width="260px">
                      {item?.fullName}
                    </TableCell>
                    <TableCell align="center">{item?.userName}</TableCell>
                    <TableCell align="center" width="240px">
                      {moment(item?.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="center" width="240px">
                      <>
                        <IconButton
                          component={Link}
                          to={`/account/update/${item?.id}`}
                          onClick={() => {}}
                        >
                          <RemoveRedEyeIcon />
                        </IconButton>
                        <IconButton
                          component={Link}
                          to={`/account/remove/${item?.id}`}
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
        {users?.data?.meta?.total > 0 && (
          <Pagination
            page={page}
            count={Math.ceil(users?.data?.meta?.total / pageSize)}
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

export default User;
