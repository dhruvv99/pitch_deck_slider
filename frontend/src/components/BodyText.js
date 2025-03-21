import { TextField, Box, Paper } from "@mui/material";

export default function BodyText({ title, setTitle, subtitle, setSubtitle, bodyText, setBodyText, fontSizes, fontColors, alignment, bgColor, croppedImage }) {
  return (
    <Paper elevation={3} sx={{ m: 2, p: 2, bgcolor: bgColor, display: "flex", flexDirection: "column", alignItems: "center", border: "none", boxShadow: "none", minHeight: "600px", width: "800px" }}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        fullWidth
        variant="standard"
        InputProps={{
          style: { fontSize: `${fontSizes.title}px`, color: fontColors.title, textAlign: alignment, borderBottom: "none" },
          disableUnderline: true,
        }}
      />
      <TextField
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
        fullWidth
        variant="standard"
        InputProps={{
          style: { fontSize: `${fontSizes.subtitle}px`, color: fontColors.subtitle, textAlign: alignment, borderBottom: "none" },
          disableUnderline: true,
        }}
      />
      <Box sx={{ display: "flex", width: "100%", gap: 2, alignItems: "flex-start", mt: 2 }}>
        {croppedImage && (
          <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
            <img src={croppedImage} alt="Cropped" style={{ maxWidth: "100%", height: "auto" }} />
          </Box>
        )}
        <TextField
          value={bodyText}
          onChange={(e) => setBodyText(e.target.value)}
          placeholder="Body Text"
          fullWidth
          multiline
          variant="standard"
          InputProps={{
            style: { fontSize: `${fontSizes.body}px`, color: fontColors.body, textAlign: alignment, borderBottom: "none" },
            disableUnderline: true,
          }}
        />
      </Box>
    </Paper>
  );
}
