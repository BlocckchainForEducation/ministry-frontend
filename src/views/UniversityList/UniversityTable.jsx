import { Avatar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

export default function UniversityTable({ universities }) {
  return (
    <div>
      <Box pt={2}>
        <Typography variant="h3" align="center">
          Danh sách Trường Đại học đã tham gia hệ thống
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>SĐT</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Ngày tham gia</TableCell>
              <TableCell>Chấp nhận bởi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {universities.map((uni, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{uni.universityName}</TableCell>
                <TableCell>{uni.email}</TableCell>
                <TableCell>{uni.phone}</TableCell>
                <TableCell>{uni.address}</TableCell>
                <TableCell>{"1/1/2020"}</TableCell>
                <TableCell>
                  <AvatarGroup max={5}>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                  </AvatarGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
