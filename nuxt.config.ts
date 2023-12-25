// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: "OKDOKEY",
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          crossorigin: ''
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Uma demonstração de site de agência de viagens (rolês). Criado por André Moura Santos.'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
