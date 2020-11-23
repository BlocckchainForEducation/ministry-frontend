import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import VoteBody from "../../shared/VoteBody";
import View from "../../utils/View";
import VotedHeader from "./VotedHeader";

export default function VoteHistory(props) {
  const [state, setState] = useState({
    loading: true,
    votedRequests: [],
  });

  useEffect(() => {
    fetchVoteHistory();
  }, []);

  async function fetchVoteHistory() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=old`);
    if (response.ok) {
      const voted = await response.json();
      setState({ loading: false, votedRequests: voted });
    } else {
      console.log(await response.json());
    }
  }

  let content;
  if (state.votedRequests.length > 0) {
    content = state.votedRequests.map((voted, index) => (
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
      <View title="Lịch sử vote">{state.loading ? null : content}</View>
    </div>
  );
}
