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
            }
          }
        },
      },
    },
  });

export default i18n;