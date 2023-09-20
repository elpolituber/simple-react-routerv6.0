import { useSearchParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
const Blog = () => { 
    
    const [searchParams,setSearchParams]=useSearchParams();

    // useEffect(()=>{
    //     setSearchParams({filter:"franc"});
    // },[searchParams])

    const { data, loading, error}=useFetch('https://jsonplaceholder.typicode.com/posts')
    if(loading)return <p>...Cagando data</p>
    if(error)return <p>Error.....</p>
    
    const handleChange=(e)=>{
        let filter=e.target.value;
        if(filter){
            setSearchParams({filter});     
        }else{
            setSearchParams({});
        }
    }

    return(
    <>
     <h1>Blog</h1>
     <input type="text"
      onChange={handleChange} 
      className="form-control my-3"
      value={searchParams.get("filter")||""}/>
     <ul>
        {data.filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map(post=>{
            return <Link to={`/blog/${post.id}`} key={post.id}><li>{post.title}</li></Link>
         })}
     </ul>
     
    </>
    ) 
}
export default Blog;