import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareJs, faReact,faHtml5, faCss3, faPhp, faBootstrap, faGit, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Clean from '../images/skills/clean.png';
import Dynamic from '../images/skills/dynamic.png';
import Responsive from '../images/skills/responsive.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const AboutMe = () => {

  useEffect(() => {
    AOS.init({
        duration:3000
    });
  },[])

  const skills = [
    {
      skillsLogo:Clean,
      skillsParap:'I am trained to develop websites that are easily to maintain.'
    },   
    {
      skillsLogo:Dynamic,
      skillsParap:'I am trained to develop websites that prioritize user experience.'
    },
    {
      skillsLogo:Responsive,
      skillsParap:'I am trained to develop websites that are mobile friendly.'
    },
  ]

  return (

   
   <Container data-aos="fade-left"  data-aos-duration="2000">
        <h1 className='display-1 text-center my-3' id='AboutMe'>About Me</h1>
        <Row>
        <Col>
        <p className='lead text-md-start'>
        Hi! I’m <span className='fw-bold'>Norman Amorganda</span>. I have a passion for designing, learning, and building things for the web. I like to solve design problems, 
        create interactive interfaces, and develop web applications.
        Here are the technologies I’ve been working with:
        </p>
        <div className='d-flex my-3'>
          <Col>
          <ul className='skill-list'>
            <li>  <FontAwesomeIcon icon={faHtml5}/> HTML</li>
            <li>  <FontAwesomeIcon icon={faCss3}/> CSS</li>
            <li>  <FontAwesomeIcon icon={faBootstrap}/> Bootstrap</li>
          </ul>
          </Col>
          <Col>
          <ul className='skill-list'>
            <li><FontAwesomeIcon icon={faSquareJs}/> Javascript</li>
            <li> <FontAwesomeIcon icon={faReact}/> ReactJS</li>
            <li>  <FontAwesomeIcon icon={faPhp}/> PHP</li>
          </ul>
          </Col>
          <Col>   
          <ul className='skill-list'>
            <li>   <FontAwesomeIcon icon={faGit}/> Git</li>
            <li>   <FontAwesomeIcon icon={faGithub}/> GitHub</li>
            <li>  <FontAwesomeIcon icon={faDatabase}/> MySQL</li>
          </ul>  
    
          </Col>
        </div>
        </Col>
        </Row>
        <Row>
          {skills.map((skill) => {
          return  (
               <Col className='d-flex flex-column align-items-center'>
                <img className='skill-img' src={skill.skillsLogo}></img>
                <p class='lead text-center'>{skill.skillsParap}</p>
              </Col>
            )

          })} 
          </Row>

      
      
    </Container>

  )
}

export default AboutMe
