import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import your icons
import IconWeb from '../../images/Doings/icon-dev.svg';
import IconApp from '../../images/Doings/icon-app.svg';
import IconDesign from '../../images/Doings/icon-design.svg';
import IconEmbeded from '../../images/Doings/icon-photo.svg';
import Web3Icon from "../../images/Doings/Web3Icon.png";

// Define an array of services
const services = [
  {
    icon: IconWeb,
    title: 'Web2.0 development',
    description: 'High-quality development of sites at the professional level.',
  },
  {
    icon: IconApp,
    title: 'Web3.0 development',
    description: 'Professional development of blockchain and smart contract-based applications.',
  },
  {
    icon: IconDesign,
    title: 'Web design',
    description: 'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: IconEmbeded,
    title: 'Embeded systems',
    description: 'Unlock endless tech opportunities by learning embedded systems design and development.',
  },
  {
    icon: Web3Icon,
    title: 'Solidity smart contract development.',
    description: 'Unlock endless tech opportunities With super developed and tested smart contracts for advanced blockchain solutions.',
  },
];

const Doings = () => {
  return (
    <section className="service text-primary-dark dark:text-ternary-light">
      <h3 className="h3 service-title font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">
        What I'm Doing
      </h3>
      <ul className="service-list mt-[3rem]">
        {services.map((service, index) => (
          <li
            key={index}
            className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex gap-[2rem]"
          >
            <div className="service-icon-box">
              {/* <img
                src={service.icon}
                alt={`${service.title} icon`}
                width="40"
                className="min-w-[40px]"
              /> */}
              <LazyLoadImage
                src={service.icon}
                effect="blur"
                width="40"
                className="min-w-[40px]"
                alt={`${service.title} icon`}
              />
            </div>
            <div className="service-content-box !text-start">
              <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">
                {service.title}
              </h4>
              <p className="service-item-text text-lg font-medium">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Doings;
