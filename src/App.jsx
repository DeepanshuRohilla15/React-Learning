import PropTypes from 'prop-types'

function App() {
  return(
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div style={{display:"flex", justifyContent:"center", paddingTop:15}}>
        <div>
          <div>
          <PostComponent
          name="100xDevs"
          subTitle="2000 follower"
          time="2m ago"
          image="https://yt3.googleusercontent.com/bIsvZiNx5gmvYrXUbiXrcIEPTEcV5oQhifz92mNNcjti71E5CF6strmqQAQc1PqxAoqcObkF8g=s900-c-k-c0x00ffffff-no-rj"
          description="Want to become a billionaire"
            />
          </div>
          <br />
          <div>
          <PostComponent
          name="100xDevs"
          subTitle="Promoted"
          
          image="https://yt3.googleusercontent.com/bIsvZiNx5gmvYrXUbiXrcIEPTEcV5oQhifz92mNNcjti71E5CF6strmqQAQc1PqxAoqcObkF8g=s900-c-k-c0x00ffffff-no-rj"
          description="How to improve a problem-solving skills"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", borderRadius:10, borderColor:"gray",
   borderWidth:1, padding:20 }

function PostComponent({name, subTitle, time, image, description}) {
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
      <div>{subTitle}</div>
      {time && <div style={{display: 'flex'}}>
        <div>{time}</div>
        <img src={ "https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{width: 14, height:14}}/>
      </div>}
      
    </div>
  </div>
  <div style={{fontSize: 12}}>
    {description}
  </div>
</div>
}
PostComponent.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}


export default App