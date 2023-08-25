import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const CustomBackdrop = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: 100,
});

// eslint-disable-next-line react/prop-types
const Backdrop = ({ backdropClick }) => {
  return <CustomBackdrop onClick={() => backdropClick()} />;
};

export default Backdrop;
