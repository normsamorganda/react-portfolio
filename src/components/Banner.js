import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Norman from '../images/Norman'
import '../App.css'
import Image from 'react-bootstrap/Image'
import TypeIt from "typeit-react";

const Banner = () => {

  return (

        <Container>
            <Row>
                <Col lg className="d-flex align-items-center switch-1">
                <div className='d-flex flex-column justify-content-center'>
                   <h1 class='display-1 text-center'>
                   <TypeIt options={{ strings: ["Hello, I'm Norman!"], speed:200, waitUntilVisible: true,}}/></h1>
                   <p class="lead text-center">
                   I'm an aspiring Jr Frontend Developer,
                    currently focused on building beautiful web interfaces and web applications.
                    </p>
                   
                    <div className='d-flex justify-content-around'>
                    <a href='https://www.linkedin.com/in/norman-amorganda-999791262/' target="_blank"><i class="bi bi-linkedin alt-icon"> </i></a>
                   <a href='https://github.com/normsamorganda' target="_blank"><i class="bi bi-github  alt-icon"></i></a>
                    <a href="https://web.facebook.com/dongingots" target="_blank">
                        <i class="bi bi-facebook alt-icon"></i>
                    </a>
                    </div>
                    <div className='d-flex justify-content-center py-3'>
                    <Button variant='primary' target='_blank' href="https://drive.google.com/file/d/1f1NSSyvb8cx9d3pXLoLge_5-xtfh__Y_/view">
                        <span>Resume</span>
                        <i class="bi bi-sign-turn-right mx-1"></i>
                    </Button>
                    </div>
                </div>
                </Col>
                <Col>
                <div className="d-flex justify-content-center switch-1">
                    <Image src={Norman} roundedCircle fluid></Image>
                </div>
                </Col>
            </Row>

        </Container>
  )
}

export default Banner
