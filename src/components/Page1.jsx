import { Link } from "react-router-dom";
export const Page1 = () => {
  return (
    <div>
      <h1> page1</h1>
      <Link to="detailA">detailA</Link>
      <br />
      <Link to="detailB">detailB</Link>
    </div>
  )
}