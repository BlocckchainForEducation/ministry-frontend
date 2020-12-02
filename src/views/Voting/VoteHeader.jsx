import { Avatar, Box, Button, Typography } from "@material-ui/core";

export default function VoteHeader({ request, sendVote }) {
  return (
    <div>
      <Box bgcolor="white" px={2} py={1} display="flex" alignItems="center">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Avatar></Avatar>
          <Box mx={2}>
            <Typography variant="h5">{request.universityName}</Typography>
          </Box>
        </Box>
        <Box pr={2} flexShrink={0}>
          <Button variant="contained" color="primary" onClick={(e) => sendVote("accept", request._id)}>
            Đồng ý
          </Button>
        </Box>
        <Box flexShrink={0}>
          <Button onClick={(e) => sendVote("decline", request._id)}>Từ chối</Button>
        </Box>
      </Box>
    </div>
  );
}
