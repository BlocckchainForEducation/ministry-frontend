import { Box, Container } from "@material-ui/core";
import View from "../../utils/View";
import UniversityTable from "./UniversityTable";

export default function index(props) {
  return (
    <div>
      <View title="Danh sách TĐH">
        <Box bgcolor="white">
          <UniversityTable></UniversityTable>
        </Box>
      </View>
    </div>
  );
}
