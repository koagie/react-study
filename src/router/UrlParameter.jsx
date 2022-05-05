import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <>
      <div>urlparameter page</div>
      <p>パラメータは{ id }です</p>
    </>
  )
}