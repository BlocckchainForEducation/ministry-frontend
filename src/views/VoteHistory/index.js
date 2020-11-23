import { Box, Button, Divider, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { pushFetchedVotedRequests } from "../Voting/redux";
import VotingRequest from "../Voting/VoteRequest";

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

  const title = (
    <div>
      <Divider></Divider>
      <Box py={2} mb={3} bgcolor="white">
        <Typography variant="h4" align="center">
          Lịch sử các lần vote
        </Typography>
      </Box>
    </div>
  );

  const history = votedRequests.map((voted, index) => (
    <Box mb={3}>
      <VotingRequest request={voted} key={index}></VotingRequest>
    </Box>
  ));

  let content = (
    <>
      {title}
      {history}
    </>
  );

  return (
    <div>
      {!shouldShowHistory ? (
        <Box textAlign="right">
          <Button color="primary" onClick={() => fetchVoteHistory()}>
            Hiển thị lịch sử
          </Button>
        </Box>
      ) : (
        content
      )}
    </div>
  );
}
