import { Avatar, Box, Grid, Link, Typography, useTheme } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
export default function VotedHeader({ request }) {
  const theme = useTheme();
  return (
    <Box bgcolor="white" px={2} py={1} display="flex" alignItems="center">
      <Box flexGrow={1} display="flex" alignItems="center">
        <Avatar src={request.imgSrc}></Avatar>
        <Box mx={2}>
          <Typography variant="h5">{request.universityName}</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Grid container spacing={2} alignItems="center" justify="flex-end">
            <Grid item>
              <small>Ngày bỏ phiếu: {request.date}</small>
            </Grid>
            {/* <Grid item>{request.state === "accepted" ? <i>Đồng ý</i> : <i>Từ chối</i>}</Grid> */}
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
          <Link href={`${process.env.REACT_APP_EXPLORER_URL}/#/transactions/${request.txid}`}>
            {/* <small>{`Txid: ${request.txid.slice(0, 30)}...`}</small> */}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
