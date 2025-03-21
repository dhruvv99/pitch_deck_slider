import { Select, MenuItem, TextField, Button, Paper } from "@mui/material";

export default function Toolbar({ selectedField, setSelectedField, fontSizes, setFontSizes, fontColors, setFontColors, alignment, setAlignment, handleImageUpload }) {
  return (
    <Paper elevation={3} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
      <label>Apply to:</label>
      <Select value={selectedField} onChange={(e) => setSelectedField(e.target.value)} size="small">
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="subtitle">Subtitle</MenuItem>
        <MenuItem value="body">Body</MenuItem>
      </Select>
      <TextField
        type="number"
        value={fontSizes[selectedField]}
        onChange={(e) => setFontSizes({ ...fontSizes, [selectedField]: e.target.value })}
        size="small"
        sx={{ width: 80 }}
        label="Font Size"
      />
      <input
        type="color"
        value={fontColors[selectedField]}
        onChange={(e) => setFontColors({ ...fontColors, [selectedField]: e.target.value })}
      />
      <label>Alignment:</label>
      <Select value={alignment} onChange={(e) => setAlignment(e.target.value)} size="small">
        <MenuItem value="left">Left</MenuItem>
        <MenuItem value="center">Center</MenuItem>
        <MenuItem value="right">Right</MenuItem>
      </Select>
      <Button variant="contained" component="label">
        Upload Image
        <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
      </Button>
    </Paper>
  );
}