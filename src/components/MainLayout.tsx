import React from 'react'
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

const normalLinks = "text-[1.4rem] md:text-[1rem] lg:text-[1.2rem] leading-tight roboto-regular text-center mb-[0.5rem] border-b-4 border-transparent hover:border-red-primary py-2 mb-4 mt-2 md:my-0"

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
  },
  {
    name: 'Cotiza Ya',
    link: '/aliados',
    className: 'bg-blue-primary text-[1.4rem] md:text-[1rem] lg:text-[1.2rem] leading-tight roboto-regular text-center text-white-background rounded-full min-w-max px-8 py-2 mb-4 mt-2 md:my-0 md:mb-[0.5rem]'
  }
]


function NavBar() {

  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);

  return (
    <div className='bg-white'>
      <div className='w-full border-b-2'>
        <div className='justify-between hidden md:flex px-4'>
          <div className='flex py-1'>
            <span className='text-[1.4rem] md:text-[1rem] roboto-regular leading-tight text-black-texts pr-5'>(+57) 318 323 9426</span>
            <span className='text-[1.4rem] md:text-[1rem] roboto-regular leading-tight text-black-text'>serviciosascprisma@gmail.com</span>
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
        <div className='flex justify-between px-2'>
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
        <div className='flex flex-col justify-center items-center'>
          <span className='small-text roboto-regular md:leading-[2.5rem] text-black-texts md:pr-5'>(+57) 318 323 9426</span>
          <span className='small-text roboto-regular md:leading-[2.4rem] text-black-text'>serviciosascprisma@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

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
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='w-full md:w-1/2 p-2 flex flex-col justify-center'>
            <h3 className='roboto-bold small-text text-black-texts mb-1'>Nuestros Servicios</h3>
            <div className='bg-yellow-100 flex justify-center items-center w-full h-[14rem] mb-2'>
              <h3>Espacio Publicitario</h3>
            </div>

            <div className='flex flex-col items-center'>
              <span className='extra-small-text roboto-bold text-black-texts'>(+57) 318 323 9426</span>
              <span className='extra-small-text roboto-bold text-black-text'>serviciosascprisma@gmail.com</span>
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
        <div className='text-center mt-2'>
          <span className='small-text roboto-regular text-black-text'>&copy; {new Date().getFullYear()} Ascensores Prisma. Todos los derechos reservados.</span>
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