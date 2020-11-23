import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import VotingRequest from "./VotingRequest";

export default function RequestList(props) {
  const [state, setState] = useState({
    loading: true,
    requests: null,
  });

  async function fetchNewVoteRequests() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/voting/vote-requests?state=new`);
    if (response.ok) {
      const voteRequests = await response.json();
      setState({ loading: false, requests: voteRequests });
    } else {
      console.log(await response.json());
    }
  }

  useEffect(() => {
    fetchNewVoteRequests();
  }, []);

  return (
    <div>
      {state.loading
        ? "loading"
        : state.requests.map((request, index) => (
            <Box mb={3}>
              <VotingRequest request={request} key={index}></VotingRequest>
            </Box>
          ))}
    </div>
  );
}
