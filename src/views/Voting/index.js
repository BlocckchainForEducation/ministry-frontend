import { Link, Typography } from "@material-ui/core";
import View from "../../components/utils/View";
import RequestList from "./RequestList";

export default function index(props) {
  return (
    <div>
      <View title="Voting">
        <RequestList></RequestList>
        <Typography align="right">
          <Link href="#">Hiển thị lịch sử</Link>
        </Typography>
      </View>
    </div>
  );
}
