import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Category.scss';
import {racineUrl} from "../util/util";

const Category = () => {
    console.log(racineUrl + "/category/manSetOutfit.jpg");
    return (
        <div className='category'>
            <h1 className='titlePage'>Category</h1>
            <Container>
                <Row>
                    <Col className='categ-item'>
                        <img src={racineUrl + "/category/manSetOutfit.jpg"} alt="" />
                    </Col>
                    <Col className='categ-item'>
                    </Col>
                    <Col className='categ-item'>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Category;