import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './MainLayout.css'

import { v4 as uuidv4 } from 'uuid';

import CompanyLogo from '../assets/isologotipo.png';

import WhatsappIcon from '../assets/icons/whatsapp.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedIn.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';

import BurguerMenu from '../assets/icons/BurguerMenu.svg';


const socialMedia = [
  {
    name: 'Whatsapp',
    icon: WhatsappIcon,
    link: 'https://api.whatsapp.com/send?phone=573102956916',
    className: 'w-[1.8rem] mr-[0.2rem]'
  },
  // La configuracion de la cuenta de Facebook no deja acceder por link
  {
    name: 'Facebook',
    icon: FacebookIcon,
    link: 'https://www.facebook.com/share/p/vMi4a2gNWCdQ9o2s/',
    className: 'w-[1.75rem] mr-[0.2rem]'
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/ascensoresprisma/',
    className: 'w-[1.85rem]'
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/ascensores-prisma-3b978965',
    className: 'w-[2.15rem]'
  },
  {
    name: 'Youtube',
    icon: YoutubeIcon,
    link: 'https:/www.youtube.com/@AscensoresPrisma',
    className: 'w-[2.28rem]'
  }
]

const normalLinks = "text-[1.2rem] md:text-[1rem] xl:text-[1.1rem] leading-tight roboto-regular text-center border-b-4 border-transparent hover:border-red-primary py-2 "

const categories = [
  {
    name: 'Productos y Servicios',
    link: '/nosotros',
    className: normalLinks
  },
  {
    name: 'Sobre Nosotros',
    link: '/contacto',
    className: normalLinks
  },
  {
    name: 'Nuestros Proyectos',
    link: '/contacto',
    className: normalLinks
  }
]


function NavBar() {

  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);

  return (
    <div className='bg-white'>
      <div className='w-full border-b-2 px-4'>
        <div className='justify-between hidden md:flex px-4'>
          <div className='flex py-1'>
            <span className='text-[1.2rem] md:text-[1rem] roboto-light leading-tight text-black-texts pr-5'>(+57) 318 323 9426</span>
            <span className='text-[1.2rem] md:text-[1rem] roboto-light leading-tight text-black-text'>webmasterprisma1@gmail.com</span>
          </div>
          <div className='flex justify-between'>
            {
              socialMedia.map((social) => (
                <a key={uuidv4()} href={social.link} className='flex cursor-pointer'>
                  <img 
                    src={social.icon}
                    alt={social.name}
                    className={social.className}
                  />
                </a>
              ))
            }
          </div>
        </div>
        <div className='max-w-[1575px] mx-auto flex justify-between px-2'>
          <a href="/" className='min-w-max'>
            <img src={CompanyLogo} alt='Ascensor Prisma' className="w-[12rem] md:w-[15rem]" />
          </a>
          <ul className='hidden md:flex'>
            {
              categories.map((category) => (
                <li key={uuidv4()} className='flex items-center justify-center mr-5'>
                  <a href={category.link} className={category.className}>{category.name}</a>
                </li>
              ))
            }
            <button className="text-white flex items-center justify-center mr-5 w-full sm:w-max px-6 py-2 my-auto rounded-full outline-none relative overflow-hidden border duration-300 ease-linear text-[1.4rem] md:text-[1rem] xl:text-[1.2rem] leading-tight roboto-regular text-center 
              after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-blue-secondary hover:after:opacity-100 hover:after:scale-[2.5] hover:text-black-text bg-blue-primary">
              <span className="relative z-10">
                Cotiza Ya
              </span>
            </button>
          </ul>
          <div className='flex items-center md:hidden'>
            <button onClick={() => {setMobileMenuOpened(!mobileMenuOpened)}}>
              <img src={BurguerMenu} className='w-[3.5rem]' alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={'w-full pb-4 ' + (mobileMenuOpened ? 'block' : 'hidden') }>
        <div className='flex flex-col justify-between my-6'>
        {
          categories.map((category) => (
            <li key={uuidv4()} className='flex items-center justify-center mr-5'>
              <a href={category.link} className={category.className}>{category.name}</a>
            </li>
          ))
        }
        </div>
        <div className='flex flex-col justify-center items-center mt-2'>
          <span className='small-text roboto-regular md:leading-[2.5rem] text-black-texts md:pr-5'>(+57) 318 323 9426</span>
          <span className='small-text roboto-regular md:leading-[2.4rem] text-black-text'>webmasterprisma1@gmail.com</span>
        </div>
        <div className='flex justify-center'>
          {
            socialMedia.map((social) => (
              <a key={uuidv4()} href={social.link} className='flex cursor-pointer'>
                <img 
                  src={social.icon}
                  alt={social.name}
                  className={social.className}
                />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const newsItems = [
  {
    imgSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720",
    category: "MUNDO",
    time: "Hace pocos segundos",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
  {
    imgSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720",
    category: "MUNDO",
    time: "Hace pocos segundos",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
  {
    imgSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720",
    category: "MUNDO",
    time: "Hace pocos segundos",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
  {
    imgSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720",
    category: "MUNDO",
    time: "Hace pocos segundos",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
];

const NewsSection = () => {

  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }
  
  const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#dedcf5' }}
      onClick={onClick}
    />
  );
  
  const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#dedcf5' }}
      onClick={onClick}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className="px-2"> {/* Added padding to create gap */}
            <div className="block rounded-lg bg-blue-secondary shadow-md">
              <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                <img
                  className="rounded-lg w-full h-64 object-cover"
                  src={item.imgSrc}
                  alt={item.category}
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[rgba(0,0,0,0.3)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              <div className="p-4">
                <div className="flex justify-start items-center mb-2">
                  <span className="text-blue-primary font-bold text-sm">{item.category}</span>
                  <span className="ml-2 text-gray-500 text-sm">{item.time}</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>{`
        .slick-slide {
          padding: 0 0.2px; /* Add padding to each slide */
        }

        .slick-list {
          margin: 0 -0.2px; /* Adjust the negative margin */
        }

        @media (max-width: 768px) {
          .slick-prev, .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

function Footer() {

  return (
    <footer className='bg-white p-6'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='w-full md:w-1/2 p-2'>
            <h3 className='roboto-bold small-text text-black-texts mb-1'>Nuestra Ubicación</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9184702090756!2d-74.10091898891754!3d4.608615595346722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a02e020d4d%3A0x46772c4e86871dd3!2sAscensores%20Prisma!5e0!3m2!1sfr!2sco!4v1720662458445!5m2!1sfr!2sco"
              width="100%"
              height="370"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='w-full md:w-1/2 p-2 flex flex-col'>
            <h3 className='roboto-bold small-text text-black-texts mb-1 px-2'>Conoce más</h3>
            <NewsSection />
          </div>
        </div>
        <div className='text-center mt-5'>
            <div className='flex flex-col items-center mt-2'>
              <span className='extra-small-text roboto-regular text-black-text'>(+57) 318 323 9426</span>
              <span className='extra-small-text roboto-regular text-black-text'>serviciosascprisma@gmail.com</span>
              <span className='extra-small-text roboto-regular text-black-text'>&copy; {new Date().getFullYear()} Ascensores Prisma. Todos los derechos reservados.</span>
            </div>
            <div className='flex justify-center'>
              {
                socialMedia.map((social) => (
                  <a key={uuidv4()} href={social.link} className='flex cursor-pointer mx-2'>
                    <img
                      src={social.icon}
                      alt={social.name}
                      className={social.className}
                    />
                  </a>
                ))
              }
            </div>
        </div>
      </div>
    </footer>
  );
}



type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({children}: MainLayoutProps) {
  return (
    <div className='w-full min-h-screen bg-white-background'>
      <NavBar />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout