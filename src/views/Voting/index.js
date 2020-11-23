import { Container, Typography, Link, Box } from "@material-ui/core";
import RequestList from "./RequestList";

export default function index(props) {
  return (
    <div>
      <Container>
        <Box py={3}>
          <RequestList></RequestList>
          <Typography align="right">
            <Link href="#">Hiển thị lịch sử</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
