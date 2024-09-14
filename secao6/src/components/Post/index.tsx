import { useParams, useSearchParams } from "react-router-dom"

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();


  return <div><h1>Posts {`Param: ${id}`} {`QS: ${qs}`}</h1></div>
}