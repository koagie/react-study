import { Routes, Route } from 'react-router-dom';
import { Home } from "../components/Home";
import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";
import { Page2 } from "../components/Page2";
import { NoMatch } from "../components/NoMatch";
import { Page1Routes } from './Page1Routes';
import { UrlParameter } from "./UrlParameter";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/page1" element={<Page1 />} />
      <Route path="/page1/detailA"  element={<Page1DetailA />}  />
      <Route path="/page1/detailB"  element={<Page1DetailB />}  />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/UrlParameter" element={<UrlParameter />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    )
}