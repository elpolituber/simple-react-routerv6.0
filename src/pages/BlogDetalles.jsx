import {useParams,Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
const Blogdetalles = () => { 
    const params=useParams();
    const {data, loading, error}=useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if(loading)return <p>...Cagando data</p>;
    if(error)return <p>Error.....</p>;
    
    return(
        <>
            <h1>{data.title}</h1>
            <br />
            <p>{data.body}</p> 
            <Link to="/blog">Volver</Link>
        </>
    )
 }
export default Blogdetalles;