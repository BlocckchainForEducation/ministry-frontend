import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import View from "../../shared/utils/View";
import { setFetchedUniversities } from "./redux";
import UniversityTable from "./UniversityTable";

export default function UniversityList(props) {
  const loading = useSelector((state) => state.universityListSlice.fetching);
  const universities = useSelector((state) => state.universityListSlice.universities);
  const dp = useDispatch();

  useEffect(() => {
    fetchUniversity();
  }, []);

  async function fetchUniversity() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/university/universities`);
    if (!response.ok) {
      console.log(await response.json());
    } else {
      dp(setFetchedUniversities(await response.json()));
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
