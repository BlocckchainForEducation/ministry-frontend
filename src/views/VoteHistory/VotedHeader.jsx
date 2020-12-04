import { Avatar, Box, Grid, Typography, useTheme } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
export default function VotedHeader({ request }) {
  const theme = useTheme();
  return (
    <Box bgcolor="white" px={2} py={1} display="flex" alignItems="center">
      <Box flexGrow={1} display="flex" alignItems="center">
        <Avatar></Avatar>
        <Box mx={2}>
          <Typography variant="h5">{request.universityName}</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item>{request.state === "accepted" ? <i>Đã đồng ý</i> : <i>Đã từ chối</i>}</Grid>
            <Grid item>
              {request.state === "accepted" ? (
                <CheckIcon style={{ color: theme.palette.success.dark }}></CheckIcon>
              ) : (
                <CloseIcon style={{ color: theme.palette.error.dark }}></CloseIcon>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box>
          {/* <Typography variant="caption" style={{ fontStyle: "italic" }}>
            {request.date}
          </Typography> */}
          <small> {request.date}</small>
        </Box>
      </Box>
    </Box>
  );
}
