import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeVoteState } from "./redux";

export default function VoteHeader({ request }) {
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
