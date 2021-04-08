import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import View from "../../shared/utils/View";
import BallotBody from "../../shared/BallotBody";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import { updateVoteHistory } from "./redux";
import VotedHeader from "./VotedHeader";

export default function VoteHistory(props) {
  const loading = useSelector((state) => state.voteHistorySlice.fetching);
  const ballots = useSelector((state) => state.voteHistorySlice.ballots);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchVoteHistory();
  }, []);

  async function fetchVoteHistory() {
    try {
      const response = await axios.get("/ballots?state=old");
      dp(updateVoteHistory(response.data));
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
    }
  }

  let content;
  if (ballots.length > 0) {
    content = ballots.map((ballot, index) => (
      <Box mb={3} key={index}>
        <VotedHeader request={ballot}></VotedHeader>
        <BallotBody ballot={ballot}></BallotBody>
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
