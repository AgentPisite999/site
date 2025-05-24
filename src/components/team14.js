import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './team14.css';

const teamMembers = [
  {
    name: 'Rohit Rajbhar',
    title: 'Founder',
    image: '/rohit.png',
    quote: `Technology is more than code—it's a catalyst for transformation. At AgentPi, we engineer solutions that merge AI, data, and automation to solve real problems with precision and scalability.`,
  },
  {
    name: 'Siddhesh Kadam',
    title: 'Co-founder & Tech Solution Architect',
    image: '/siddhesh.png',
    quote: `As Co-Founders of AgentPi, we’re driven by one vision— to harness the power of technology to solve complex challenges. From AI to automation, we engineer solutions that create real impact.`,
  },
  {
    name: 'Vikash Bisoi',
    title: 'CTO & Tech Lead',
    image: '/vikas.png',
    quote: `Leading tech at AgentPi means constantly pushing boundaries. From architecture to execution, we embed intelligence at every layer— because innovation starts with strong engineering.`,
  },
];

const Team14 = () => {
  return (
    <section className="team14-wrapper" id="Team14">
      <div className="team14-bg">
        <h2 className="team14-heading">About AgentPi</h2>
        <p className="team14-intro">
          At AgentPi, we are redefining the future of technology with intelligent, adaptive, and forward-thinking IT solutions.
          Our mission is to engineer advanced digital infrastructures that anticipate growth. From AI to automation, AgentPi builds smart ecosystems that shape the future.
        </p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="team14-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team14-card">
                <img src={member.image} alt={member.name} className="team14-img" />
                <h3 className="team14-name">{member.name}</h3>
                <p className="team14-title">{member.title}</p>
                <blockquote className="team14-quote">"{member.quote}"</blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team14;
