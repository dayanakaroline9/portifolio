<template>
  <q-page class="home-page q-ma-md flex flex-center column">
    <!-- Seção Hero -->
    <div class="hero text-center">
      <q-avatar size="150px" class="q-mb-md">
        <img src="../assets/perfil.jpeg" alt="Foto de perfil">
      </q-avatar>
      <div class="tex-center text-h1 text-weight-bold" style="font-size: 30px;">Olá, eu sou a Dayana Karoline</div>
      <div class="q-ma-md text-subtitle1" style="max-width: 500px;">Desenvolvedora Front-end e criadora de conteúdo no YouTube, 
        auxiliando iniciantes na área de desenvolvimento web.
      </div>
      <!-- Seção de Linguagens -->
      <div class="q-mt-xl flex justify-center items-center">
        <!-- Logo HTML -->
        <div class="q-mx-md">
          <q-img src="../assets/html-5.png" alt="HTML" style="width: 50px;" />
          <div  class="text-center">HTML</div>
        </div>
        <!-- Logo CSS -->
        <div class="q-mx-md">
          <q-img src="../assets/css3.png" alt="CSS" style="width:40px;" />
          <div  class="text-center">CSS</div>
        </div>
        <!-- Logo JavaScript -->
        <div class="q-mx-md">
          <q-img src="../assets/javascript.png" alt="JavaScript" style="width: 50px;" />
          <div  class="text-center">JavaScript</div>
        </div>
        <!-- Logo Python -->
        <div class="q-mx-md">
          <q-img src="../assets/python.png" alt="Python" style="width: 50px;" />
          <div class="text-center">Python</div>
        </div>
        <!-- Logo C++ -->
        <div class="q-mx-md">
          <q-img src="../assets/c++.png" alt="C++" style="width: 50px;" />
          <div  class="text-center">C++</div>
        </div>
      </div>
    </div>

    <div class="projects-section q-mt-xl">
      <div class="text-h3 text-center q-mb-md">Projetos Recentes</div>
      <div class="q-gutter-md row">
        <div class="col-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section>
              <div class="text-h6">Projeto 1</div>
              <p>Descrição curta do projeto e suas funcionalidades.</p>
            </q-card-section>
            <q-card-actions>
              <q-btn label="Ver no GitHub" to="https://github.com/seu-usuario/projeto1" />
            </q-card-actions>
          </q-card>
        </div>
        <!-- Repita para outros projetos -->
      </div>
    </div>


    <div class="skills-section q-mt-xl">
      <div class="text-h3 text-center q-mb-md">Minhas Habilidades</div>
      <div class="flex justify-center">
        <q-chip label="Vue.js" color="primary" class="q-mx-sm" />
        <q-chip label="Quasar" color="secondary" class="q-mx-sm" />
        <q-chip label="React" color="accent" class="q-mx-sm" />
        <!-- Adicione mais chips conforme necessário -->
      </div>
    </div>


    <div class="testimonials-section q-mt-xl">
      <div class="text-h3 text-center q-mb-md">Depoimentos</div>
      <q-carousel>
        <q-carousel-slide>
          <p>"Dayana é extremamente talentosa e entregou o projeto com qualidade excepcional!" - Cliente A</p>
        </q-carousel-slide>
        <q-carousel-slide>
          <p>"Trabalhar com Dayana foi uma experiência incrível. Ela é profissional e tem ótimas ideias." - Colega B</p>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="cta-section q-mt-xl text-center">
      <q-btn label="Entre em contato" color="primary" to="/contato" />
    </div>

    <div class="blog-section q-mt-xl">
      <div class="text-h3 text-center q-mb-md">Últimos Vídeos</div>
      <div class="row q-gutter-md">
        <!-- Primeiro vídeo -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section>
              <div class="text-h6">Data Válida</div>
              <p>Neste vídeo, vamos resolver um exercício de Lógica de Programação...</p>
            </q-card-section>
            <q-card-actions>
              <!-- Incorporando o vídeo com iframe -->
              <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; width: 100%;">
                <iframe
                  src="https://www.youtube.com/embed/8l5shcSMXII"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                ></iframe>
              </div>
            </q-card-actions>
          </q-card>
        </div>

        <!-- Segundo vídeo -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section>
              <div class="text-h6">Divisível por 3 e por 4</div>
              <p>Neste vídeo, vamos resolver um exercício de Lógica de Programação...</p>
            </q-card-section>
            <q-card-actions>
              <!-- Incorporando o vídeo com iframe -->
              <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; width: 100%;">
                <iframe
                  src="https://www.youtube.com/embed/BhSynegnsRc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                ></iframe>
              </div>
            </q-card-actions>
          </q-card>
        </div>

        <!-- Repita para outros vídeos -->
      </div>
    </div>







    
  </q-page>
</template>
