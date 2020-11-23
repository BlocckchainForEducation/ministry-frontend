import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewVoteRequests } from "./redux";
import VotingRequest from "./VoteRequest";

export default function RequestList(props) {
  const loading = useSelector((state) => state.votingViewSlice.fetchingNewVoteRequests);
  const newVoteRequests = useSelector((state) => state.votingViewSlice.newVoteRequests);
  const dp = useDispatch();

  async function fetchNewVoteRequests() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=new`);
    if (response.ok) {
      const newVoteRequests = await response.json();
      dp(setNewVoteRequests(newVoteRequests));
    } else {
      console.log(await response.json());
    }
  }

  useEffect(() => {
    fetchNewVoteRequests();
  }, []);

  return (
    <div>
      {loading
        ? "loading"
        : newVoteRequests.map((request, index) => (
            <Box mb={3}>
              <VotingRequest request={request} key={index}></VotingRequest>
            </Box>
          ))}
    </div>
  );
}
