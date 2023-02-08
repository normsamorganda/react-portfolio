import React from 'react'
import { Grid, Container, Row, Col, Button } from 'react-bootstrap';
import ProjObj from './ProjObj';
import Traview from '../images/projects/traview.PNG'
import Azor from '../images/projects/azor.png'
import Gig from '../images/projects/gig.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Project = () => {

    useEffect(() => {
        AOS.init({
            duration:3000
        });
      },[])

    const projects = [
        {
        img:Traview,
        title:'Traview Travel Blog',
        live: 'https://normsamorganda.github.io/guides.html',
        description:'A travel forum website that serves as an information hub for prospective travelers planning a getaway.',
        css:'#CSS',
        html:'#HTML',
        bootstrap:'#BOOTSTRAP',
        github:'https://github.com/normsamorganda/normsamorganda.github.io'
    },
    {
        img:Azor,
        title:'Azor Motorcycle Services',
        live: 'https://capstone-azor-5a9x.vercel.app/',
        description:'Using this app you can quickly setup a booking system to accept bookings from your clients by answering a few questions.',
        css:'#CSS',
        html:'#HTML',
        bootstrap:'#BOOTSTRAP',
        react:'#REACT',
        mongo:'#MongoDB',
        node:'#NodeJS',
        express:'#Express',
        github:'https://github.com/normsamorganda/azor'
    },
    {
        img:Gig,
        title:'Gig Job Search',
        live: '#',
        description:'Gig aims to connect businesses with talent and improve lives through better careers. Helping facilitate the matching and communication of job opportunities between jobseekers and employers',
        css:'#CSS',
        html:'#HTML',
        react:'#REACT',
        mui:'#MaterialUI',
        github:'https://github.com/normsamorganda/gig-website'
    }
]

  return (
 
        <Container id='projects' data-aos="fade-in" data-aos-duration="2000">
                <h1 className='display-1 text-center'>Projects</h1>
               {projects.map(proj => 
                     (
                    <Row className='text-center'>
                        <Col lg='6' className='mt-5'>
                        <img className='img-size' src={proj.img}></img>
                        </Col>
                        <Col lg='6' className='mt-5'>
                            <h1 className='display-1'>{proj.title}</h1>
                            <p className='lead'>{proj.description}</p>
                            <span className='lead'> {proj.html} </span>
                            <span className='lead'> {proj.css} </span>
                            <span className='lead'>{proj.bootstrap} </span>
                            <span className='lead'>{proj.react} </span>
                            <span className='lead'>{proj.express} </span>
                            <span className='lead'>{proj.node} </span>
                            <span className='lead'>{proj.mui} </span>

                            <div className='icons-proj'>
                            <Button variant='primary' href={proj.live} target='_blank'>View Live</Button>
                            <a href={proj.github} target="_blank">
                            <i class="bi bi-github alt-icon move-icon mx-3"></i>
                            </a>
                    </div>
                        </Col>
                     </Row>
                    
                    )
                    
                )}
              
               

           
        </Container>

  )
}

export default Project
