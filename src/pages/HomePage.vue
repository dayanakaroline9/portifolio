<template>
  <q-page class="home-page flex flex-center row">

      <div class="col-12 col-sm-6 justify-center">

        <!-- Imagem Perfil-->
        <div class="q-mt-md q-gutter-md flex row justify-center">
          <q-avatar class="q-mt-md"
            :size="$q.screen.lt.sm ? '200px' : '300px'">
            <img src="src/assets/perfil.jpeg" />
          </q-avatar>
        </div>

        <!-- Ícones das redes sociais -->
        <div class="q-mt-md q-gutter-md flex row justify-center">
          <q-btn round  @click='openLink("https://www.instagram.com/dayanakaroline98")'>
            <q-img 
              src="src/assets/instagram.png"
              :width="$q.screen.lt.sm ? '25px' : '30px'"
            />
          </q-btn>

          <q-btn round  @click='openLink("https://www.facebook.com/profile.php?id=61556515784128")'>
            <q-img 
              src="src/assets/facebook.png"
              :width="$q.screen.lt.sm ? '25px' : '30px'"
            />
          </q-btn>
          <q-btn round  @click='openLink("https://www.youtube.com/@DayanaKarolineDev")' >
            <q-img 
              src="src/assets/youtube.png"
              :width="$q.screen.lt.sm ? '25px' : '30px'"
            />
          </q-btn>
        </div>
      </div>

      <div class="col-12 col-sm-6 justify-center text-center">

        <!--Logo-->
        <div class="q-ma-lg">
          <q-img src="src/assets/logoescuro.png"
            :width="$q.screen.lt.sm ? '200px' : '250px'"
            class="q-mb-md"
          />
        </div>

        <div class="colum items-center q-gutter-md">
          <div class="col">
            <q-btn  outline style="color: white; max-width: 300px;" label="SOBRE" size="lg" class="full-width q-mb-sm" to="/DayanaKaroline/Sobre" />
          </div>
          <div class="col">
            <q-btn  outline style="color: white; max-width: 300px;" label="PROJETOS" size="lg" class="full-width q-mb-sm" to="/DayanaKaroline/Projetos" />
          </div>
          <div class="col">
            <q-btn  outline style="color: white; max-width: 300px;" label="SERVIÇOS" size="lg" class="full-width q-mb-sm" to="/DayanaKaroline/Servicos"/>
          </div>
          <div class="col">
            <q-btn  outline style="color: white; max-width: 300px;" label="CONTATO" size="lg" class="full-width q-mb-sm" to="/DayanaKaroline/Contato" />
          </div>
        </div>
      </div>
  </q-page>
</template>

<script setup>
const openLink = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.home-page {
  background: url('src/assets/fundo.png') no-repeat center center;
  background-size: cover;
  height: 100vh; 
}
</style>
