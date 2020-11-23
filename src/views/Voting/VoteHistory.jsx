import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { pushFetchedVotedRequests } from "./redux";
import VotingRequest from "./VoteRequest";

export default function VoteHistory(props) {
  const shouldShowHistory = useSelector((state) => state.votingViewSlice.shouldShowHistory);
  const votedRequests = useSelector((state) => state.votingViewSlice.votedRequests);
  const dp = useDispatch();

  async function fetchVoteHistory() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=old`);
    if (response.ok) {
      const voted = await response.json();
      dp(pushFetchedVotedRequests(voted));
    } else {
      console.log(await response.json());
    }
  }

  return (
    <div>
      {!shouldShowHistory ? (
        <Box textAlign="right">
          <Button color="primary" onClick={() => fetchVoteHistory()}>
            Hiển thị lịch sử
          </Button>
        </Box>
      ) : (
        votedRequests.map((voted, index) => (
          <Box mb={3}>
            <VotingRequest request={voted} key={index}></VotingRequest>
          </Box>
        ))
      )}
    </div>
  );
}
