import { useState } from "react";
import { PostComponent } from "../Post"


function App() {

  const [posts, setPosts] = useState([])
  
  // eslint-disable-next-line react/jsx-key
  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subTitle={post.subTitle}
    time={post.time}
    image={post.image}
    description={post.description} />)

    function addPost() {
      setPosts([...posts, {
        name: "100xdevs",
        subTitle: "100 followers",
        time: "2m ago",
        image: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5111/795111-i",
        description: "Want to become a billionaire"
      }])
    }

  return(
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent:"center", paddingTop:15}}>
        <div>
          {postComponents}
        </div>   
      </div>
      
    </div>
  )
}




export default App