import View from "../../utils/View";
import RequestList from "./RequestList";

export default function index(props) {
  return (
    <div>
      <View title="Voting">
        <RequestList></RequestList>
      </View>
    </div>
  );
}
