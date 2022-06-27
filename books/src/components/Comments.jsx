import { Component } from "react";
import {Card, Container, Row, Col} from "react-bootstrap"


class Comments extends Component{
    state = {
        reviews: []
    }
    componentDidMount = () => {
        if(this.props.asin)
        this.reviewsFetch(this.props.asin)
    }
    componentDidUpdate = (prevProps, prevState)=>{
        if(this.props.asin&&prevProps.asin !== this.props.asin){
            this.reviewsFetch(this.props.asin)
        }
        
    }
    
    reviewsFetch= async(asin)=>{
        try {
           const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,{
            method: "GET",
            headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTU5ODgwMTMsImV4cCI6MTY1NzE5NzYxM30.uQGe2ERfSABRxFLzCUKoCFbg5TV6X0us_P_-TI9n-Us"}
           })
           if (response.ok){
            const data = await response.json()
            console.log(data)
            this.setState({
                reviews: data
           })
           }else{
            const error = await response.text()
            console.log(error)
           } 
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <Container>
            <h2>Comments</h2>
            <Row>
                
            {this.state.reviews.map((review, index) =>(
                <Col xs={6} key={index}>
                <Card className="mb-2 text-dark">
                <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-muted">Rating ={review.rate}</Card.Subtitle>
                    <Card.Text>
                        Comments:{review.comment}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>))}
                
                </Row>
            </Container>
        )
    }
}
export default Comments