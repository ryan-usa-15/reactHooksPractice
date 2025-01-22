


import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Rating from './Rating';

function Product (props) {

    return(
        <div>

            <Container>
                <Row>
                    <Col>

                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={props.data.imageUrl}
                        alt="Image"
                    />
                    <h5>{props.data.productName}</h5>
                    {props.data.releasedDate}
                    <Rating 
                        rating={props.data.rating}
                        numOfReviews={props.data.numOfReviews}
                        />
                    <p> {props.data.description}</p>
                    </Col>
                </Row>
            </Container>


        </div>


    );


}

export default Product;



