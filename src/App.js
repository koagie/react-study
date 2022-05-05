import { CssModules } from "./components/CssModules"
import { InlineStyle } from "./components/InlineStyle"
import { StyledJsx } from "./components/StyledJsx"
import { StyledComponents} from "./components/StyledComponents"
import { Emotion } from "./components/Emotion";
import "./style.css"

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  )
}










//----------     memo, useCallback, レンダリングの動き　　　　　　　------------------------------------
// import { useCallback, useState } from "react";
// import { ChildArea } from "./ChildArea";
// import "./style.css";

// export default function App() {
//   console.log("App");
//   const [text, setText] = useState("");
//   const [open, setOpen] = useState(false);

//   const onChangeText = (e) => setText(e.target.value);

//   const onClickOpen = () => setOpen(!open);

//   const onClickClose = useCallback(() => setOpen(false), [setOpen] );
    

//   return (
//     <div className="App">
//       <input value={text} onChange={onChangeText} />
//       <br />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />

//     </div>
//   )

// }

