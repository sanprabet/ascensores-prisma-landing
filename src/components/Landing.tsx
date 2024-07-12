import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from './MainLayout'
import HeroImage from '../assets/HeroImage.jpeg';



function HeroSection() {
  return (
    <section className="relative pt-10 pb-8 lg:pb">
      <div className="mx-auto lg:max-w-[1575px] w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Valorizamos</span> tu Inmueble con la Mejor <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Tecnología.</span>
          </h1>
          <p className="mt-4 lg:mt-8 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt,
            libero sequi quos eos velit.
          </p>
          <div className="mt-4 lg:mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start gap-5 w-full">
              <button className="flex text-white justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                      after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                <span className="relative z-10">
                  Get Started
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

import ShieldIcon from '../assets/icons/shield-star.svg';
import BuildingIcon from '../assets/icons/building.svg';
import CargoTruckIcon from '../assets/icons/cargo-truck.svg';

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
      description: <span>Nos especializamos en la <b>importacion de equipos</b> con piezas bajo la norma NTC 5926-1, siendo distribuidores de los <b>mejores equipos en el mercado.</b></span>,
      icon: CargoTruckIcon
    },
  ]

  return (
    <div className="lg:max-w-[1575px] w-full container flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-8">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
              content.map((item) => (
                <div key={uuidv4()} className="flex flex-col items-center gap-3 bg-white rounded-3xl shadow-main px-4 py-6 mb-4 mx-4">
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


function Projects() {

  const projects = [
    {
      image: "https://dummyimage.com/1205x505",
      title: "The 400 Blows",
      description: "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      link: "#"
    },
    {
      image: "https://dummyimage.com/1205x505",
      title: "Another Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
      link: "#"
    }
  ]

  return (
    <section className="text-gray-400 bg-blue-primary body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col">
          <h1 className="w-full text-center font-bold tertiary-title leading-tight text-white mb-6">
            NUESTROS PROYECTOS
          </h1>
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

import LogoCompany1 from '../assets/companies/areandina.png'
import LogoCompany2 from '../assets/companies/formacion-tecnica-y-humana.png'
import LogoCompany3 from '../assets/companies/jorge-baron.png'
import LogoCompany4 from '../assets/companies/koaj.png'
import LogoCompany5 from '../assets/companies/laboratorios-quirigua.png'
import LogoCompany6 from '../assets/companies/su-presencia.png'

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
    <div className="flex flex-col mx-3 mb-12 rounded-lg">
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

function Landing() {


  return (
    <MainLayout>
      <HeroSection />
      <Values />
      <CompanyLogos />
      <Projects />
    </MainLayout>
  )
}

export default Landing