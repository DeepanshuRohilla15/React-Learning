import PropTypes from 'prop-types'

function App() {
  return(
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
        <PostComponent
        name="100xDevs"
        followerCount="2000"
        time="2m ago"
        image="https://yt3.googleusercontent.com/bIsvZiNx5gmvYrXUbiXrcIEPTEcV5oQhifz92mNNcjti71E5CF6strmqQAQc1PqxAoqcObkF8g=s900-c-k-c0x00ffffff-no-rj"
        description="Want to become a billionaire"
           />
        </div>
      
      </div>
      
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", borderRadius:10, borderColor:"gray",
   borderWidth:1, padding:20 }

function PostComponent({name, followerCount, time, image, description}) {
  return <div style={style}>
  <div style={{display:"flex"}}>
    <img src={image}
    style={{
      width: 50, height:50, borderRadius: 20
    }}/>
    <div style={{fontSize: 10, marginLeft:10}}>
      <b>
        {name}
      </b>
      <div>{followerCount} followers</div>
      <div>{time}</div>
    </div>
  </div>
  <div style={{fontSize: 12}}>
    {description}
  </div>
</div>
}
PostComponent.propTypes = {
  name: PropTypes.string,
  followerCount: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}


export default App