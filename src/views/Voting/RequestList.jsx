import { Box, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVoteRequestList } from "./redux";
import VotingRequest from "./VoteRequest";

export default function RequestList(props) {
  const loading = useSelector((state) => state.votingSlice.fetching);
  const voteRequests = useSelector((state) => state.votingSlice.voteRequests);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchNewVoteRequests();
  }, []);

  async function fetchNewVoteRequests() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=new`);
    if (!response.ok) {
      enqueueSnackbar(JSON.stringify(await response.json()), { variant: "error", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    } else {
      const result = await response.json();
      if (loading || result.length > voteRequests.length) {
        dp(updateVoteRequestList(result));
      }
    }
  }

  let content;
  if (voteRequests.length > 0) {
    content = voteRequests.map((request, index) => (
      <Box mb={3} key={index}>
        <VotingRequest request={request}></VotingRequest>
      </Box>
    ));
  } else {
    content = (
      <Box py={2} mb={3} bgcolor="white">
        <Typography variant="h4" align="center">
          Chưa có thêm yêu cầu bỏ phiếu mới nào!
        </Typography>
      </Box>
    );
  }

  return <div>{loading ? null : content}</div>;
}
