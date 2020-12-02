import { Box, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VoteBody from "../../shared/VoteBody";
import View from "../../utils/View";
import { updateVoteHistory } from "./redux";
import VotedHeader from "./VotedHeader";

export default function VoteHistory(props) {
  const loading = useSelector((state) => state.voteHistorySlice.fetching);
  const voteHistory = useSelector((state) => state.voteHistorySlice.voteHistory);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchVoteHistory();
  }, []);

  async function fetchVoteHistory() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=old`);
    if (!response.ok) {
      enqueueSnackbar(JSON.stringify(await response.json()), { variant: "error", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    } else {
      const fetchedVoteHistory = await response.json();
      if (loading || fetchedVoteHistory.length > voteHistory.length) {
        dp(updateVoteHistory(fetchedVoteHistory));
      }
    }
  }

  let content;
  if (voteHistory.length > 0) {
    content = voteHistory.map((vote, index) => (
      <Box mb={3} key={index}>
        <VotedHeader request={vote}></VotedHeader>
        <VoteBody request={vote}></VoteBody>
      </Box>
    ));
  } else {
    content = (
      <Box py={2} mb={3} bgcolor="white">
        <Typography variant="h4" align="center">
          Chưa có lịch sử bỏ phiếu nào!
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <View title="Lịch sử vote">{loading ? null : content}</View>
    </div>
  );
}
