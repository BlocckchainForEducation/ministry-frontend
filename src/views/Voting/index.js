import { Box, Button, Link, Typography } from "@material-ui/core";
import View from "../../components/utils/View";
import RequestList from "./RequestList";
import VoteHistory from "./VoteHistory";

export default function index(props) {
  return (
    <div>
      <View title="Voting">
        <RequestList></RequestList>
        <VoteHistory></VoteHistory>
      </View>
    </div>
  );
}
