import { Box, makeStyles } from "@material-ui/core";
import Page from "../../shared/utils/Page";
import Ballots from "./Ballots";

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Voting(props) {
  return (
    <Page title="Bỏ phiếu">
      <Box p={2}>
        <Ballots></Ballots>
      </Box>
    </Page>
  );
}
