import { Link } from "react-router-dom";
export const Page1DetailB = () => {
  return (
    <div>
      <h1> page1detailB</h1>
      <Link to="page1/detailA">detailA</Link>
      <br />
      <Link to="page1/detailB">detailB</Link>
    </div>
  )
}