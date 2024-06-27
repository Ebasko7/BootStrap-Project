import { useState , useEffect} from 'react'
import NavbarComp from './components/Navbar'
import CarouselComp from './components/Carousel'
import CardComp from './components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './App.css'

function App() {

  const [newsJSON, setnewsJSON] = useState([])

  const getJson = async() => {
    const response = await axios("https://api.spaceflightnewsapi.net/v4/articles/?limit=6")
    setnewsJSON(response.data.results)
  }

  
// 
  //API CALL FUNCTION 

  useEffect(()=>{
    getJson() 
    // const print = async () => {console.log(await newsJSON)}
    // print()
    // console.log(newsJSON)
  },[])

  useEffect(()=>{
    console.log(newsJSON)
   
  }, [newsJSON])

  const randomId = () =>{
    return Math.floor(Math.random()*100) + 1
  }

  return (
    <>
     <NavbarComp />
     <CarouselComp imagesrc="https://t4.ftcdn.net/jpg/05/56/16/81/360_F_556168144_qEINHd6qUsQH4b6wDvgOS0WtuShVwJVm.jpg "/>

    <Container>
      <Row>
        <Col>
          <CardComp imagesrc="https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=612x612&w=0&k=20&c=lYoFwMF9Sc6q07skiz6WaVovoseHk6M1tDr5qeecRjI="/>
        </Col>
        <Col>
          <CardComp imagesrc="https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=612x612&w=0&k=20&c=lYoFwMF9Sc6q07skiz6WaVovoseHk6M1tDr5qeecRjI="/>
        </Col>
        <Col>
          <CardComp imagesrc="https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=612x612&w=0&k=20&c=lYoFwMF9Sc6q07skiz6WaVovoseHk6M1tDr5qeecRjI="/>
        </Col>
      </Row>
    </Container>

     </>
  )
}

export default App



