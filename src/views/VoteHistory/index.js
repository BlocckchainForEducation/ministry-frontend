import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VoteBody from "../../shared/VoteBody";
import View from "../../utils/View";
import { setFetchedVoted } from "./redux";
import VotedHeader from "./VotedHeader";

export default function VoteHistory(props) {
  const loading = useSelector((state) => state.votedHistorySlice.fetching);
  const voteds = useSelector((state) => state.votedHistorySlice.voted);
  const dp = useDispatch();

  useEffect(() => {
    fetchVoteHistory();
  }, []);

  async function fetchVoteHistory() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=old`);
    if (response.ok) {
      dp(setFetchedVoted(await response.json()));
    } else {
      console.log(await response.json());
    }
  }

  let content;
  if (voteds.length > 0) {
    content = voteds.map((voted, index) => (
      <Box mb={3}>
        <VotedHeader request={voted}></VotedHeader>
        <VoteBody request={voted}></VoteBody>
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
