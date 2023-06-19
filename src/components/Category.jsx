import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Category.scss';
import { racineUrl } from "../util/util";

const Category = () => {
    console.log(racineUrl + "/category/manSetOutfit.jpg");
    return (
        <div className='category'>
            <h1 className='titlePage'>Category</h1>
            <Container className='categ-liste'>
                <Row >
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/manSetOutfit.jpeg"} alt="categ1" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/menShoes.jpeg"} alt="categ2" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/womanBag.jpeg"} alt="categ3" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                </Row>
                <Row  className='mt-2'>
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/womanSetBagShoes.jpeg"} alt="categ4" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/womanSetOutfit.jpeg"} alt="categ5" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                    <Col sm={3} className='categ-item'>
                        <img src={racineUrl + "/category/womanShoes.jpeg"} alt="categ6" />
                        <div className="textBottom">
                            je suis l'article
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Category;