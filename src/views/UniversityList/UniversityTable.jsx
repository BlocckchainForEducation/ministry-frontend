import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const universities = [
  {
    id: 21,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 22,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 23,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 24,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 25,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
];

export default function UniversityTable(props) {
  return (
    <div>
      <Box pt={2}>
        <Typography variant="h3" align="center">
          Danh sách Trường Đại học tham gia hệ thống
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
