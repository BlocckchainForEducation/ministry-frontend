import { Box, Container } from "@material-ui/core";
import Page from "./Page";

export default function View({ children, title }) {
  return (
    <div>
      <Page title={title}>
        <Container>
          <Box py={3}>
            <Box bgcolor="white">{children}</Box>
          </Box>
        </Container>
      </Page>
    </div>
  );
}
