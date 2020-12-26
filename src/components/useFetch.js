import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(){
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  },[])
  return {response, error};
}
const FetchPerson = (props) => {
  const res = useFetch('https://swapi.dev/api/planets/1/',{});
  
  if(!res.response){
    return <div>Loading...</div>
  }

  const person = res.response.name;
  return (
    <div>
      <span>{person}</span>
    </div>
  )
}
export default FetchPerson;