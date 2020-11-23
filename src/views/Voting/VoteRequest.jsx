import { Avatar, Box, Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch } from "react-redux";
import { changeVoteState } from "./redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function VoteRequest({ request }) {
  const classes = useStyles();
  const dp = useDispatch();

  async function sendVote(vote, _id) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote?vote=${vote}&_id=${_id}`, {
      method: "POST",
    });
    const body = await response.json();
    if (response.ok) {
      dp(changeVoteState({ _id: _id, state: vote === "accept" ? "accepted" : "declined" }));
      alert("Đã vote thành công!");
      console.log(body);
    } else {
      alert(JSON.stringify(body));
    }
  }

  return (
    <div>
      <Box bgcolor="white" px={2} py={1} display="flex" alignItems="center">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Avatar component="span"></Avatar>
          <Box mx={2}>
            <Typography variant="h5">{request.universityName}</Typography>
          </Box>
        </Box>
        {request.state === "new" ? (
          <>
            <Box px={2}>
              <Button variant="contained" color="primary" onClick={(e) => sendVote("accept", request._id)}>
                Đồng ý
              </Button>
            </Box>
            <Box>
              <Button onClick={(e) => sendVote("decline", request._id)}>Từ chối</Button>
            </Box>
          </>
        ) : request.state === "accepted" ? (
          <i>Đã đồng ý</i>
        ) : (
          <i>Đã từ chối</i>
        )}
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow>
              <TableCell>Tên Tiếng Anh</TableCell>
              <TableCell>{request.nameInEnglish}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>{request.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{request.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>{request.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Public key</TableCell>
              <TableCell>{request.pubkey}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
