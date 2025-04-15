<template>
  <q-page class="bg-black colum flex-center">

    <div class="col q-pa-md">
          <div class="col text-h1 text-weight-bolder text-white" style="font-size: 32px;">
            Meus Projetos
          </div>
          <div class="col linha-continua-continua"></div>
    </div>

    <div class="col row justify-evenly q-ma-md">

      <div class="col-12 col-sm-6 justify-center">
        <div class="q-ma-md q-gutter-md flex row justify-center">
            <q-img src="../assets/perfil.jpeg" width="300px"/>
        </div>
      </div>

      <div class="col-12 col-sm-6">

        <div class="text-h1 text-white text-weight-bolder "  style="font-size: 28px;">Meu portifólio</div>
        

        <div class="col q-mb-md q-mt-md text-h6 text-white text-justify" style="max-width: 600px;">
          Site portifólio para organizar trabalhos e serviços prestados
        </div>

        <div class="col q-mt-lg q-mb-lg" style="max-width: 600px;">
          <q-btn flat class="text-accent" label="Vue.js" size="sm"/>
          <q-btn flat class="text-accent" label="Quasar Framework" size="sm" />
        </div>

      </div>
    

    </div>


    <div class="col row justify-evenly q-ma-md">

      <div class="col-12 col-sm-6 justify-center">
        <div class="q-ma-md q-gutter-md flex row justify-center">
            <q-img src="../assets/perfil.jpeg" width="300px"/>
        </div>
      </div>

      <div class="col-12 col-sm-6">

        <div class="text-h1 text-white text-weight-bolder "  style="font-size: 28px;">Landing Page</div>
        

        <div class="col q-mb-md q-mt-md text-h6 text-white text-justify" style="max-width: 600px;">
          LandingPages personalizadas...
        </div>

        <div class="col q-mt-lg q-mb-lg" style="max-width: 600px;">
          <q-btn flat class="text-accent" label="HTML" size="sm"/>
          <q-btn flat class="text-accent" label="CSS" size="sm"/>
          <q-btn flat class="text-accent" label="Javascript" size="sm"/>
        </div>

      </div>


    </div>


    
    <div class="col row justify-evenly q-ma-md">

      <div class="col-12 col-sm-6 justify-center">
        <div class="q-ma-md q-gutter-md flex row justify-center">
            <q-img src="../assets/perfil.jpeg" width="300px"/>
        </div>
      </div>

      <div class="col-12 col-sm-6">

        <div class="text-h1 text-white text-weight-bolder "  style="font-size: 28px;"></div>
        

        <div class="col q-mb-md q-mt-md text-h6 text-white text-justify" style="max-width: 600px;">
          LandingPages personalizadas...
        </div>

        <div class="col q-mt-lg q-mb-lg" style="max-width: 600px;">
          <q-btn flat class="text-accent" label="HTML" size="sm"/>
          <q-btn flat class="text-accent" label="CSS" size="sm"/>
          <q-btn flat class="text-accent" label="Javascript" size="sm"/>
        </div>

      </div>


    </div>


    

  </q-page>
</template>

<script setup>
</script>

<style scoped>
.linha-continua-continua {
height: 2px;
background: linear-gradient(to right, #ff0081 70%, transparent 70%);
border-bottom: 2px  #ff0081;
width: 200px;
}
</style>