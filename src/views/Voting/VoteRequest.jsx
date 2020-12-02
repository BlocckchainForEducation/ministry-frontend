import { Box, Collapse } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import VoteBody from "src/shared/VoteBody";
import { collapseVoteRequest } from "./redux";
import VoteHeader from "./VoteHeader";

export default function VoteRequest({ request }) {
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
      // dp(removeVotedRequest({ _id: request._id }));
      dp(collapseVoteRequest({ _id: request._id }));
      enqueueSnackbar("Bỏ phiếu thành công!", { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    }
  }
  return (
    <Collapse in={request.in ?? true} collapsedHeight={0}>
      <Box mb={3}>
        <VoteHeader request={request} sendVote={sendVote}></VoteHeader>
        <VoteBody request={request}></VoteBody>
      </Box>
    </Collapse>
  );
}
