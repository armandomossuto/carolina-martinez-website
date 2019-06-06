import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            title: 'Freelance video editor',
            about: 'About',
            contact: 'Contact',
          },
          portfolio: {
            element: {
              wedding: 'Perez-Castilla Martinez Wedding',
            },
            closeVideo: 'Close Video',
          },
          notFound: {
            title: 'NOT FOUND',
            text: 'You just hit a route that doesn&#39;t exist.'
          },
          contact: {
            info: {
              emailAndSkype: 'Email and Skype phone/chat:',
              mobileAndWhatsapp: 'Mobile/Whatsapp:'
            },
            form: {
              firstName: 'First Name:',
              lastName: 'Last Name:',
              emailAddress: 'Email address:',
              subject: 'Subject:',
              message: 'Message:',
              submit: 'Submit'
            },
            notification: {
              error: 'Something went wrong with your request. Please try again and if it keeps happening, do not hesitate to use the contact infotmation displayed bellow.',
              success: 'Your message has been sent. I will contact you as soon as possible.'
            },
          },
          welcome: {
            message: {
              1: 'I am Carolina Martínez, a professional video editor, currently working in Lisbon, Portugal.',
              2: 'I have over seven years of experience in diferent proyects : TV shows, video clips, events, weddings, holidays, Interviews, corporate films, product films, documentaries and promotionals.',
              3: 'For any inquiry, please contact me. I am at your service.'
            }
          },
          about: {
            message: {
              1: 'I am a publicist from Venezuela, with studies in film and television. Worked six years editing for a tv producer and along the way I started independent works.',
              2: 'I love transforming footage into an actual film. Let me invite you to see my portafolio so you can get to know my work better.'
            }
          }
        },
      },
      es: {
        translation: {
          header: {
            title: 'Editora freelance de video',
            about: 'Sobre mí',
            contact: 'Contacto',
          },
          portfolio: {
            element: {
              wedding: 'Boda Perez-Castilla Martinez',
            },
            closeVideo: 'Cerrar Video',
          },
          notFound: {
            title: 'PÁGINA NO ENCONTRADA',
            text: 'La página buscada no existe.'
          },
          contact: {
            info: {
              emailAndSkype: 'Correo electrónico y Skype teléfono/chat:',
              mobileAndWhatsapp: 'Teléfono móvil/Whatsapp:'
            },
            form: {
              firstName: 'Nombre:',
              lastName: 'Apellido:',
              emailAddress: 'Correo electrónico:',
              subject: 'Título:',
              message: 'Mensaje:',
              submit: 'Enviar'
            },
            notification: {
              error: 'Ocurrió un error con su solicitud. Port favor, vuelva a intentar y si el error persiste no dude en utilizar los datos de contacto que se encuentran en la parte inferior de esta página.',
              success: 'Su mensaje se envió correctamente. Le daré una respuesta ran rápido como sea posible.'
            },
          },
          welcome: {
            message: {
              1: 'Mi nombre es Carolina Martínez y soy una editora de video profesional que reside en Lisboa, Portugal.',
              2: 'Tengo más de siete años de experiencia en diferentes tipos de proyectos: programas de TV, video clips, eventos, matrimonios, vacaciones, entrevistas, films corporativos, documentales y videos promocionales.',
              3: 'No dude en contactarme. Estoy a su servicio.'
            }
          },
          about: {
            message: {
              1: 'Tengo un título en publicidad de Venezuela, y estudios en cine y televisión. Trabajé seis años para un productor de TV junto a la realización de trabajos independientes.',
              2: 'Me encanta transformar el material en un film. Le invito a ver mi portafolio para que conozca mi trabajo mejor'
            }
          }
        },
      },
      pt: {
        translation: {
          header: {
            title: 'TODO Freelance video editor',
            about: 'Sobre mim',
            contact: 'TODO Contact',
          },
          portfolio: {
            element: {
              wedding: 'TODO Boda Perez-Castilla Martinez',
            },
            closeVideo: 'TODO Close Video',
          },
          notFound: {
            title: 'TODO PÁGINA NO ENCONTRADA',
            text: 'TODO La página buscada no existe.'
          },
          contact: {
            info: {
              emailAndSkype: 'TODO Correo electrónico y Skype teléfono/chat:',
              mobileAndWhatsapp: 'TODO Teléfono móvil/Whatsapp:'
            },
            form: {
              firstName: 'TODO Nombre:',
              lastName: 'TODO Apellido:',
              emailAddress: 'TODO Correo electrónico:',
              subject: 'TODO Título:',
              message: 'TODO Mensaje:',
              submit: 'TODO Enviar'
            },
            notification: {
              error: 'TODO Ocurrió un error con su solicitud. Port favor, vuelva a intentar y si el error persiste no dude en utilizar los datos de contacto que se encuentran en la parte inferior de esta página.',
              success: 'TODO Su mensaje se envió correctamente. Le daré una respuesta ran rápido como sea posible.'
            },
          },
          welcome: {
            message: {
              1: 'TODO Mi nombre es Carolina Martínez y soy una editora de video profesional que reside en Lisboa, Portugal.',
              2: 'TODO Tengo más de 7 años de experiencia en diferentes tipos de proyectos: programas de TV, video clips, eventos, matrimoios, vacaiones, entrevistas, fils corporativos, documentales y videos promocionales.',
              3: 'TODO No dude en contactarme. Estoy a su servicio.'
            }
          },
          about: {
            message: {
              1: 'TODO Tengo un título en publicidad de Venezuela, y estudios en cine y televisión. Trabajé seis años para un productor de TV junto a la realización de trabajos independientes.',
              2: 'TODO Me encanta transformar el material en un film. Le invito a ver mi portafolio para que conozca mi trabajo mejor'
            }
          }
        },
      },
    },
  });

export default i18n;