import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from '../MainLayout'
import HeroImage from '../../assets/HeroImage.jpeg';



function HeroSection() {
  return (
    <section className="relative pt-10 pb-8 lg:pb">
      <div className="mx-auto lg:max-w-[1575px] w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl roboto-black text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-primary from-20% via-purple-600 via-30% to-red-primary">Valorizamos</span> tu Inmueble con la Mejor <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-primary from-20% to-blue-primary">Tecnología.</span>
          </h1>
          <p className="mt-4 lg:mt-8 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]  text-gray-700">
            Soluciones integrales en ascensores con atención rápida y materiales de calidad. Transformamos espacios con tecnología de vanguardia y diseños contemporáneos.
          </p>
          <div className="mt-4 lg:mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start gap-5 w-full">
              <button className="flex text-white justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                      after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-blue-secondary hover:after:opacity-100 hover:after:scale-[2.5] hover:text-black-text bg-blue-primary">
                <span className="relative z-10">
                  Cotiza Ya
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img src={HeroImage} alt="Hero image" width="2350" height="2359" className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
        </div>
      </div>
    </section>
  );
}

import ShieldIcon from '../../assets/icons/shield-star.svg';
import BuildingIcon from '../../assets/icons/building.svg';
import CargoTruckIcon from '../../assets/icons/cargo-truck.svg';

function Values() {

  const content = [
    {
      title: 'Somos expertos en el mercado',
      description: <span><b>15 años de experiencia</b> instalando y reparando ascensores para más de <b> 500 clientes</b> en toda Colombia.</span>,
      icon: ShieldIcon
    },
    {
      title: 'Protegemos tus inversiones.',
      description: <span>Contamos con  una <b>póliza de responsabilidad</b> civil extracontractual que <b>protege tu inmueble</b> y quienes los habitan.</span>,
      icon: BuildingIcon
    },
    {
      title: 'Pensamos en tu seguridad ',
      description: <span>Nos especializamos en la <b>importacion de equipos</b> con piezas bajo la norma NTC 5926-1, con los mejores equipos en el mercado.</span>,
      icon: CargoTruckIcon
    },
  ]

  return (
    <div className="lg:max-w-[1575px] w-full flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-8">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              content.map((item) => (
                <div key={uuidv4()} className="flex flex-col items-center gap-1 bg-blue-secondary rounded-3xl shadow-main px-4 py-6 mb-4 mx-2">
                  <img src={item.icon} alt={item.title} className='w-[5rem]' />
                  <p className="text-2xl font-extrabold text-dark-grey-900 text-center">{item.title}</p>
                  <p className="text-base leading-7 text-dark-grey-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

import CategoryImage from '../../assets/images/instalation-guy.png';
import CategoryImage2 from '../../assets/images/console-box.png';
import CategoryImage3 from '../../assets/images/elevator-inside.png';
import CategoryImage4 from '../../assets/images/elevator-roof.png';
import CategoryImage5 from '../../assets/images/desk-girl.png';
import CategoryImage6 from '../../assets/images/elevator-motor.png';


const images = [
  {
    src: CategoryImage3,
    alt: 'Persona instalando ascensor',
    title: 'Instalación',
  },
  {
    src: CategoryImage2,
    alt: '',
    title: 'Mantenimiento',
  },
  {
    src: CategoryImage,
    alt: 'Description for image 3',
    title: 'Reparacion',
  },
  {
    src: CategoryImage4,
    alt: 'Description for image 3',
    title: 'Modernizacion',
  },
  {
    src: CategoryImage6,
    alt: 'Description for image 3',
    title: 'Repuestos',
  },
  {
    src: CategoryImage5,
    alt: 'Description for image 3',
    title: 'Asesoria',
  },
];

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "mx-auto",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="bg-blue-primary mx-auto px-7 py-20 flex flex-col items-center justify-center w-full">
      <div className='lg:max-w-[1575px] mx-auto w-full'>
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-stone-300">Productos y Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Encuentra el Servicio Perfecto para tus Necesidades</p>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="group w-full max-w-xs relative shadow-md rounded-lg cursor-pointer overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 transition-transform duration-300 group-hover:scale-105">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100">Conoce más</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white transition-colors duration-300 group-hover:bg-blue-secondary hover:bg-white-background text-black-text backdrop-blur p-4 py-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold">{image.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


import LogoCompany1 from '../../assets/companies/areandina.png'
import LogoCompany2 from '../../assets/companies/formacion-tecnica-y-humana.png'
import LogoCompany3 from '../../assets/companies/jorge-baron.png'
import LogoCompany4 from '../../assets/companies/koaj.png'
import LogoCompany5 from '../../assets/companies/laboratorios-quirigua.png'
import LogoCompany6 from '../../assets/companies/su-presencia.png'

function CompanyLogos() {
  const logos = [
    {
      url: LogoCompany1,
      alt: "Company 1"
    },
    {
      url: LogoCompany6,
      alt: "Company 3"
    },
    {
      url: LogoCompany4,
      alt: "Company 1"
    },
    {
      url: LogoCompany5,
      alt: "Company 2"
    },
    {
      url: LogoCompany2,
      alt: "Company 2"
    },
    {
      url: LogoCompany3,
      alt: "Company 3"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-[1575px] flex flex-col rounded-lg py-12">
      <div className="mx-auto max-w-xl text-center mb-12">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-stone-700">Nuestros Clientes</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-black-text sm:text-4xl">Ascensores de Confianza para Tu Hogar y Negocio</p>
      </div>
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-8 mx-auto">
          <Slider {...settings} className="w-full">
            {
              logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 md:w-auto">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="h-[14rem] w-auto mx-auto object-contain"
                  />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}



const testimonials = [
  {
    name: "Albert Einstein",
    commentary: "“Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.”",
    image: LogoCompany1
  },
  {
    name: "Juventus's old lady",
    commentary: "“Juventus is against racism and this club has to celebrate with different religions and other people.”",
    image: LogoCompany1
  },
  {
    name: "Legend Pele",
    commentary: "“Everything on earth is a game. A passing thing. We all end up dead. We all end up the same, don't we?”",
    image: LogoCompany1
  },
  {
    name: "William Shakespeare",
    commentary: "“If there is a book that you want to read but it's not yet out, then you must be the one to write it.”",
    image: LogoCompany1
  },
  {
    name: "Usain Bolt",
    commentary: "“Lots of legends, lots of people have come before me, but this is my time.”",
    image: LogoCompany1
  }
];

const CustomerOpinions = () => {
  return (
    <div className="relative isolate bg-white-background pb-12">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        ></div>
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-4 opacity-25 blur-3xl xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-full grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 xl:mx-0 xl:max-w-none xl:grid-cols-1">
          {testimonials.map((testimonial) => (
            <figure key={uuidv4()} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900 md:text-[1.25rem]">
                <p>{testimonial.commentary}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

import Project1 from "../../assets/images/project-1.png";
import Project2 from "../../assets/images/project-2.png";
import Project3 from "../../assets/images/project-3.png";


function Projects() {

  const projects = [
    {
      image: Project1,
      title: "The 400 Blows",
      description: "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      link: "#"
    },
    {
      image: Project2,
      title: "Another Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
      link: "#"
    },
    {
      image: Project3,
      title: "Another Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
      link: "#"
    },
  ]

  return (
    <section className="text-gray-400 bg-blue-primary body-font">
      <div className="max-w-[1575px] mx-auto px-5 py-12">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-stone-300">Nuestros Proyectos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Casos de Éxito en Modernización de Ascensores</p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            projects.map((project, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={project.image}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  {project.title}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {project.description}
                </p>
                <a href={project.link} className="text-indigo-400 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

import TechnicalPeople from '../../assets/images/technical-team.png';
import ElevatorComponents from '../../assets/images/elevator-components.png';
import ModernElevator from '../../assets/images/modern-elevator.png';

const tabData = [
  {
    title: 'Instalación y Mantenimiento',
    description: 'See over 3X more data with Map Labs than Google Business Profiles natively. Customize date ranges to view performance metrics by day, week, or month. Discover the truth about your Google Business Profile with Map Labs Performance Reports. Analyze KPIs like Direction Requests, Phone Calls, and Website Visits to see when you have the highest and lowest performance on Google Maps.',
    cta1: { text: 'Start FREE TRIAL!', link: '#calendly-signup' },
    image: TechnicalPeople,
  },
  {
    title: 'Repuestos y Reparaciones',
    description: 'Discover exactly what keywords your business is being found for on Page 1 of Google Maps and Search. Keyword Tracking allows you to understand how your customers are searching for your business so you can create engaging posts, promotions, and assets that match their intent and engage them to choose your business over the competition. Understand which keywords have the most impact on your business by comparing changes in impressions month-over-month or year-over-year.',
    cta1: { text: 'Start FREE TRIAL!', link: '#calendly-signup' },
    image: ElevatorComponents,
  },
  {
    title: 'Modernización de Ascensores',
    description: 'See over 3X more data with Map Labs than Google Business Profiles natively. Customize date ranges to view performance metrics by day, week, or month. Discover the truth about your Google Business Profile with Map Labs Performance Reports. Analyze KPIs like Direction Requests, Phone Calls, and Website Visits to see when you have the highest and lowest performance on Google Maps.',
    cta1: { text: 'Start FREE TRIAL!', link: '#calendly-signup' },
    image: ModernElevator,
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-blue-primary pb-6">
      <div className="mx-auto max-w-xl text-center mb-12">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-stone-300">Productos y Servicios</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Conoce nuestras soluciones</p>
      </div>
      <div className="lg:max-w-[1575px] mx-auto px-4">
        <div className="flex overflow-auto pb-4">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tab-column__item cursor-pointer mx-1 p-4 rounded-lg ${activeTab === index ? 'bg-blue-secondary text-black' : 'bg-white text-black'}`}
              onClick={() => setActiveTab(index)}
            >
              <h6 className="tab-column__item--title font-bold mb-0">{tab.title}</h6>
            </div>
          ))}
        </div>
        <div className="tab-content p-8 flex flex-wrap bg-white rounded-xl shadow-lg">
          <div className="w-full lg:w-1/2">
            <h5 className="text-blue-primary font-black text-[1.6rem]">{tabData[activeTab].title}</h5>
            <p className="font-light mt-2 mr-8">{tabData[activeTab].description}</p>
            <div className="flex space-x-4 mt-6">
              <a href={tabData[activeTab].cta1.link} className="btn btn--sm btn--filled bg-blue-primary text-white px-4 py-2 rounded-lg" target="_blank" rel="noopener noreferrer">{tabData[activeTab].cta1.text}</a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center items-center">
            <img src={tabData[activeTab].image} alt={tabData[activeTab].title} className="w-full h-auto rounded-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}



function Landing() {


  return (
    <MainLayout>
      <HeroSection />
      <Values />
      <Categories />
      <Tabs />
      <CompanyLogos />
      <CustomerOpinions />
      <Projects />
    </MainLayout>
  )
}

export default Landing