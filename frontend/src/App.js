import { useState } from "react";
import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import BodyText from "./components/BodyText";

export default function TextEditor() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [selectedField, setSelectedField] = useState("title");
  const [fontSizes, setFontSizes] = useState({ title: 16, subtitle: 14, body: 12 });
  const [fontColors, setFontColors] = useState({ title: "#000000", subtitle: "#000000", body: "#000000" });
  const [alignment, setAlignment] = useState("left");
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCroppedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", height: "100vh" }}>
      <Sidebar bgColor={bgColor} setBgColor={setBgColor} />
      <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        <Toolbar selectedField={selectedField} setSelectedField={setSelectedField} fontSizes={fontSizes} setFontSizes={setFontSizes} fontColors={fontColors} setFontColors={setFontColors} alignment={alignment} setAlignment={setAlignment} handleImageUpload={handleImageUpload} />
        <BodyText title={title} setTitle={setTitle} subtitle={subtitle} setSubtitle={setSubtitle} bodyText={bodyText} setBodyText={setBodyText} fontSizes={fontSizes} fontColors={fontColors} alignment={alignment} bgColor={bgColor} croppedImage={croppedImage} />
      </div>
    </Container>
  );
}
