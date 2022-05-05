import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="page1/detailA">detailA</Link>
      <br />
      <Link to="page1/detailB">detailB</Link>
    </div>
  )
}