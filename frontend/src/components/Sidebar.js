import { SketchPicker } from "react-color";
import { Paper } from "@mui/material";

export default function Sidebar({ bgColor, setBgColor }) {
  return (
    <Paper elevation={3} sx={{ width: "20%", p: 2, bgcolor: "#f5f5f5" }}>
      <p style={{ fontWeight: "bold" }}>Background Color</p>
      <SketchPicker color={bgColor} onChange={(color) => setBgColor(color.hex)} />
    </Paper>
  );
}
