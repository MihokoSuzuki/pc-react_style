import { CssModules } from "./Components/CssModules";
import { Emotion } from "./Components/Emotion";
import { InlineStyle } from "./Components/InlineStyeles";
import { StyledComponent } from "./Components/StyledComponents";
import { StyledJsx } from "./Components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </div>
  );
}
