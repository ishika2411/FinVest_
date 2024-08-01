import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

import weatherImg from '../assets/weather.png';
import guideImg from '../assets/guide.png';
import customizationImg from '../assets/customization.png';

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Investor Profiler',
    desc: 'Suggest a company that would be good fit for investment.',
  },
  {
    imgUrl: guideImg,
    title: 'Better Portfolio Suggestion',
    desc: 'A portfolio is suggested based on users investment goals and risk tolerance.',
  },
  {
    imgUrl: customizationImg,
    title: 'Diversification strategies',
    desc: 'Offer diversification strategies to minimize risk and maximize returns.',
  },
];

const Services = () => {
  return (
    <section>
      <Container className="section__services ml-30">
        <div className="intro ml-30">
          <h5 className="services__subtitle px-30">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
        </div>
        <div className="services__list">
          {servicesData.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
