import {Component} from "react"
import {Card} from "react-bootstrap"


class Book extends Component{
    render(){
        return(
                   
            
                    <Card  onClick={()=>{this.props.handleBook(this.props.book.asin)}}>
                        <Card.Img className="img-fluid width-100" variant="top" src={this.props.book.img}/>
                        <Card.Body>
                            <Card.Title>{this.props.book.title}</Card.Title>
                        </Card.Body>
                
                    </Card>
                    
            
        )
    }
}
export default Book