import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { removeVotedRequest } from "./redux";

export default function VoteHeader({ request }) {
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function sendVote(vote, _id) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote?vote=${vote}&_id=${_id}`, {
      method: "POST",
    });
    const result = await response.json();
    if (!response.ok) {
      enqueueSnackbar(JSON.stringify(result), { variant: "error", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    } else {
      dp(removeVotedRequest({ _id: _id, state: vote === "accept" ? "accepted" : "declined" }));
      enqueueSnackbar("Bỏ phiếu thành công!", { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    }
  }

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
