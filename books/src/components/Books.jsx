import { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Book from "./book";


class Books extends Component{
    state={
        asin:""
    }
    handleBook =(newAsin)=>{
        this.setState({
          asin: newAsin,
        })
    }    
    render(){
        return(
            
            <Container>
                <h2>Books</h2>
                <Row>
                    
                    {
                    this.props.books.slice(0,6).map(mappedBook=>(
                        <Col className="mb-2" xs={6} key={mappedBook.asin}>
                        <Book book={mappedBook}
                        handleBook={this.handleBook}
                        />
                        </Col>

                    )
                    )}
                </Row>
            </Container>
            
        )
    }
}
export default Books