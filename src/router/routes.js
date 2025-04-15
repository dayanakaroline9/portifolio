const routes = [
  {
    path: '/',
    component: () => import('layouts/PageInicio.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') }
    ]
  },
  {
    path: '/DayanaKaroline',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Sobre', component: () => import('src/pages/SobrePage.vue') },
      { path: 'Projetos', component: () => import('src/pages/ProjetosPage.vue') },
      { path: 'Contato', component: () => import('src/pages/ContatoPage.vue') },
      { path: 'Servicos', component: () => import('src/pages/ServicosPage.vue') },

    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
