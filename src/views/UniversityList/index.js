import { Box, Container } from "@material-ui/core";
import View from "../../components/utils/View";
import UniversityTable from "./UniversityTable";

export default function index(props) {
  return (
    <div>
      <View title="Danh sách TĐH">
        <UniversityTable></UniversityTable>
      </View>
    </div>
  );
}
