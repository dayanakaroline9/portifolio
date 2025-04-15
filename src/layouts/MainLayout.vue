<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="q-header text-white" 
    height-hint="98">
      <q-toolbar align="center">
        <q-toolbar-title>
          <q-img src="../assets/logoescuro.png"
            :width="$q.screen.lt.sm ? '200px' : '250px'"
            class="q-ma-md"
          />
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="HOME" />
        <q-route-tab to="/DayanaKaroline/Sobre" label="SOBRE" />
        <q-route-tab to="/DayanaKaroline/Projetos" label="PROJETOS" />
        <q-route-tab to="/DayanaKaroline/Servicos" label="SERVIÇOS" />
        <q-route-tab to="/DayanaKaroline/Contato" label="CONTATO" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="q-pa-md text-white bg-black text-center">
      Dayana Karoline &copy; 2025 |Todos os direitos reservados.
    </div>

  </q-layout>
</template>
<style scoped>
/* Garantir que a imagem de fundo cubra toda a área do header */
.q-header {
  background-image: url('../assets/fundo.png');
  background-size: cover;
  background-position: center;
  opacity: 0.9; /* Controlando a opacidade da imagem de fundo */
}
</style>