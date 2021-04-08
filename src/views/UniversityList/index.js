import { Box } from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import View from "../../shared/utils/View";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import { setFetchedUniversities } from "./redux";
import UniversityTable from "./UniversityTable";

export default function UniversityList(props) {
  const loading = useSelector((state) => state.universityListSlice.fetching);
  const universities = useSelector((state) => state.universityListSlice.universities);
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchUniversity();
  }, []);

  async function fetchUniversity() {
    try {
      const response = await axios.get("/universities");
      dp(setFetchedUniversities(response.data));
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
    }
  }

  return (
    <div>
      <View title="Danh sách TĐH">
        <Box bgcolor="white" minWidth={680}>
          {loading ? null : <UniversityTable universities={universities}></UniversityTable>}
        </Box>
      </View>
    </div>
  );
}
