import { Box } from "@material-ui/core";
import VotingRequest from "./VotingRequest";

const requests = [
  {
    id: 22,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 22,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 23,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
  {
    id: 24,
    universityName: "Truong Dai Hoc Bach Khoa Ha Noi",
    nameInEnglish: "HUST",
    address: "So 1, Dai Co viet",
    phone: "01234567",
    email: "bkhn@husst.edu.vn",
    pubkey: "1234zfasdfa9zvzdfk2",
  },
];

export default function RequestList(props) {
  return (
    <div>
      {requests.map((request, index) => (
        <Box mb={3}>
          <VotingRequest request={request} key={index}></VotingRequest>
        </Box>
      ))}
    </div>
  );
}
