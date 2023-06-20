import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import { GlobalContext } from "../../context/GlobalState";
import { Home } from '../../components/Home/Home'


export const HomeApp = () => {
  // const { docs, getDocs } = useContext(GlobalContext);
    const [docs, setCharacters] = useState([])
    useEffect(() => {
    getDocs()
  }, [])
  
  const getDocs = async () => {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=[api-key]')
      setCharacters(response.data.response.docs)
    } catch (error) {
    console.error(error)
    console.log(response);
  }
}
return (
    <>
    {docs.map((article, index) => (
        <Home key={index} data={article} />
))}
      </>
  )
  
  }
