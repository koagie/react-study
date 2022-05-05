import { Router } from "./router/Router"
import "./style.css";

export default function App() {
  // return (
  //   //BrowserRouterの有効化
  //   <BrowserRouter>
  //     <div className="App">
  //       <Link to="/">Home</Link>
  //       <br />
  //       <Link to="/page1">Page1</Link>
  //       <br />
  //       <Link to="/page2">Page2</Link>
  //       <br />
  //       <Home />
  //       <Page1 />
  //       <Page2 />
  //     </div>
  //     <Routes>
  //       <Route path="/page1">
  //         <Page1 />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
  return (
    <div>
    <h1>React Router v6</h1>
    <Router />
  </div>
  )
};




//------------------  styled の動き、様々な方法
// import { CssModules } from "./components/CssModules"
// import { InlineStyle } from "./components/InlineStyle"
// import { StyledJsx } from "./components/StyledJsx"
// import { StyledComponents} from "./components/StyledComponents"
// import { Emotion } from "./components/Emotion";
// import "./style.css"

// export default function App() {
//   return (
//     <div className="App">
//       <InlineStyle />
//       <CssModules />
//       <StyledJsx />
//       <StyledComponents />
//       <Emotion />
//     </div>
//   )
// }




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

