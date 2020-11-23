import { Box, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import VotingRequest from "./VotingRequest";

export default function VoteHistory(props) {
  const [voteHistory, setVoteHistory] = useState(null);

  async function fetchVoteHistory() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=old`);
    if (response.ok) {
      const voted = await response.json();
      setVoteHistory(voted);
    } else {
      console.log(await response.json());
    }
  }

  return (
    <div>
      {!voteHistory ? (
        <Box textAlign="right">
          <Button color="primary" onClick={() => fetchVoteHistory()}>
            Hiển thị lịch sử
          </Button>
        </Box>
      ) : (
        voteHistory.map((voted, index) => (
          <Box mb={3}>
            <VotingRequest request={voted} key={index}></VotingRequest>
          </Box>
        ))
      )}
    </div>
  );
}
