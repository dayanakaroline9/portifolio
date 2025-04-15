<template>
    <q-page class="bg-black flex-center flex">

      <div class="row justify-evenly q-ma-md">

        <div class="col-12 col-sm-6 justify-center">

          <div class="col">
            <div class="col text-h1 text-weight-bolder text-white text-left" style="font-size: 32px;">
              Conheça mais sobre mim
            </div>
            <div class="col linha-continua-continua"></div>
          </div>




          <div class="col q-mb-md q-mt-md text-subtitle1 text-white text-justify" style="max-width: 500px;">
            Sou Bacharel em Ciência e Tecnologia com Ênfase em Tecnologia da Computação e apaixonada por desenvolvimento web desde 2017, 
            quando concluí o ensino médio junto ao curso técnico em Informática. Desde então, atuo na área, unindo minha experiência prática ao viés educativo.
            <br>
            <br>
            Crio conteúdos para o YouTube com o objetivo de ajudar iniciantes no desenvolvimento web, 
            compartilhando conhecimento por meio de vídeos educativos e pequenos projetos práticos. 
            Acredito que aprender com exemplos reais e didáticos facilita a jornada de quem está começando na programação.

          </div>

          <div class="col q-mt-lg text-center">
            <q-btn flat class="text-accent" label="HTML" size="sm"/>
            <q-btn flat class="text-accent" label="CSS" size="sm" />
            <q-btn flat class="text-accent" label="JavaScript" size="sm" />
            <q-btn flat class="text-accent" label="Vue.js" size="sm"/>
            <q-btn flat class="text-accent" label="C++" size="sm"/>
            <q-btn flat class="text-accent" label="Python" size="sm"/>
          </div>

          </div>

          <div class="col-12 col-sm-6 justify-center">

          <!-- Imagem Perfil-->
          <div class="q-mt-md q-gutter-md flex row justify-center">
            <q-avatar class="q-mt-md"
              :size="$q.screen.lt.sm ? '200px' : '300px'">
              <img src="../assets/perfil.jpeg" />
            </q-avatar>
          </div>

          <!-- Ícones das redes sociais -->
          <div class="q-mt-md q-gutter-md flex row justify-center">
            <q-btn round  @click='openLink("https://www.instagram.com/dayanakaroline98")'>
              <q-img 
                src="../assets/instagram.png"
                :width="$q.screen.lt.sm ? '25px' : '30px'"
              />
            </q-btn>

            <q-btn round  @click='openLink("https://www.facebook.com/profile.php?id=61556515784128")'>
              <q-img 
                src="../assets/facebook.png"
                :width="$q.screen.lt.sm ? '25px' : '30px'"
              />
            </q-btn>
            <q-btn round  @click='openLink("https://www.youtube.com/@DayanaKarolineDev")' >
              <q-img 
                src="../assets/youtube.png"
                :width="$q.screen.lt.sm ? '25px' : '30px'"
              />
            </q-btn>
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
.linha-continua-continua {
  height: 2px;
  background: linear-gradient(to right, #ff0081 70%, transparent 70%);
  border-bottom: 2px  #ff0081;
  width: 200px;
}
</style>