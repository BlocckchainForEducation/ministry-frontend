import { Box, Container } from "@material-ui/core";
import UniversityTable from "./UniversityTable";

export default function index(props) {
  return (
    <div>
      <Container>
        <Box py={2}>
          <Box bgcolor="white">
            <UniversityTable></UniversityTable>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
