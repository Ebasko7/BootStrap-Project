import { useState, useEffect } from 'react';
import NavbarComp from './components/Navbar';
import CarouselComp from './components/Carousel';
import CardComp from './components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './App.css';

function App() {
  const [newsJSON, setnewsJSON] = useState([]);

  const getJson = async () => {
    try {
      const response = await axios("https://api.spaceflightnewsapi.net/v4/articles/?limit=6");
      setnewsJSON(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log('Fetching Data')
    getJson();
  }, []);

  useEffect(() => {
    console.log(newsJSON);
  }, [newsJSON]);

  return (
    <>
      <NavbarComp />
      {newsJSON.length > 0 && <CarouselComp newsJSON={newsJSON} />}
      <Container>
        <Row>
          {newsJSON.slice(0, 3).map((newsItem, index) => (
            <Col key={index}>
              <CardComp imagesrc={newsItem.image_url} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

//PASS JSON to each card to render names and info