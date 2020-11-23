import { Avatar, Box, Typography } from "@material-ui/core";

export default function VotedHeader({ request }) {
  return (
    <Box bgcolor="white" px={2} py={1} display="flex" alignItems="center">
      <Box flexGrow={1} display="flex" alignItems="center">
        <Avatar></Avatar>
        <Box mx={2}>
          <Typography variant="h5">{request.universityName}</Typography>
        </Box>
      </Box>
      <Box>{request.state === "accepted" ? <i>Đã chấp nhận</i> : <i>Đã từ chối</i>}</Box>
    </Box>
  );
}
