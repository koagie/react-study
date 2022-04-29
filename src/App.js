import { InlineStyle } from "./components/InlineStyle"
import "./style.css"

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
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

