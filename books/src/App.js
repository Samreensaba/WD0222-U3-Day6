import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from "react-bootstrap"
import './App.css';
import{Component} from 'react'
import Books from './components/Books'
import history from './data/books/history.json'
import Comments from './components/Comments';

class App extends Component{
  state={
    asin:""
}
handleBook =(newAsin)=>{
    this.setState({
      asin: newAsin,
    })
} 

  render(){
  return (
    <div className="App">
      <Container style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{backgroundColor:"lightgrey"}}>STRIVE BOOKS!</h1>
        <Row>
          <Col xs={12} md={6}>
            <Books books={history}
            handleBook={this.handleBook}/>
          </Col>
          <Col xs={12} md={6}>
          <Comments asin={this.state.asin}/>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}
}

export default App;
