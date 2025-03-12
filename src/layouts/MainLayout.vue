Layout Builder
Visible Header
Visible Footer
Visible left-side Drawer
Visible right-side Drawer
Inject Drawer content for scrolling
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar align="center">
        <q-toolbar-title>
            <img src="../assets/logoescuro.png" style="">
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/page1" label="Home" />
        <q-route-tab to="/page2" label="Sobre Mim" />
        <q-route-tab to="/page3" label="Projetos" />
        <q-route-tab to="/page4" label="Serviços" />
        <q-route-tab to="/page5" label="Contato" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
