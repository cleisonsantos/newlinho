const NotFound = { template: '<h1>Erro 404</h1>' }

const Home = { 
    template: `
    <div>
<header class="banner">
<section id="home">
    <div class="home-cover text-center p-3 fadeIn_banner">
      <p class="lead text-white ">Móveis planejados</p>
      <h1 class="display-4 ">Linho Móveis</h1>
      <p class="lead py-3 "><a href="servicos.html" class="btn btn-lg btn-primary">Conheça nossos serviços</a></p>
    </div>
  </section>
</header>

<section class="p-3 " id="#products">
<h1 class="lead text-center py-3">Fabricamos produtos de diversos segmentos</h1>
  <div class="row container mx-auto py-3">
    <div class="col-md-4 zoom ">
        <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header galery-img"> </div>
              <div class="card-body">
                <h4 class="card-title">Móveis para casa em geral</h4>
                  <p class="card-text">Trabalhamos com diversos móveis e decoraçoes</p>
              </div>
            </div>
    </div>

    <div class="col-md-4 zoom">
        <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header galery-img2 "> </div>
              <div class="card-body">
                <h4 class="card-title">Móveis para banheiro</h4>
                  <p class="card-text">Planejamos e construimos armários para seus banheiro</p>
              </div>
            </div>
    </div>

    <div class="col-md-4 zoom">
        <div class="card mb-3" style="max-width: 20rem;">
            <div class="card-header galery-img3 "> </div>
              <div class="card-body">
                <h4 class="card-title">Móveis para escritório</h4>
                  <p class="card-text">Fabricamos diversos móveis para escritório em geral</p>
              </div>
            </div>
    </div>

</div>

<div class="container d-flex">
  <a href="galeria.html" class="btn btn-lg btn-outline-primary mx-auto">Ver mais...</a>
</div>
</section>
</div>`}

const Galery = { template: `
  <div>
  <h1 class="text-center">Galeria</h1>
<h1 class="lead text-center py-3 ">Conheça nossa linha de produtos mais de perto</h1>
          <section class="py-5 fadeIn " id="galery">

              <div class="row container m-auto">
                <div  class="col-md-4 zoom ">
                    <a href="#img1">
                    <div id="card1" class="card mb-3 " style="max-width: 20rem;">
                        <div class="card-header galery-img"> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para casa em geral</h4>
                              <p class="card-text">Trabalhamos com diversos móveis e decoraçoes</p>
                          </div>
                        </div>
                      </a>
                </div>

                <div  class="col-md-4 zoom">
                    <a href="#img2">
                    <div id="card2" class="card mb-3" style="max-width: 20rem;">
                        <div class="card-header galery-img2 "> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para banheiro</h4>
                              <p class="card-text">Planejamos e construimos armários para seus banheiro</p>
                          </div>
                        </div>
                      </a>
                </div>

                <div  class="col-md-4 zoom">
                    <a href="#img3">
                    <div id="card3" class="card mb-3" style="max-width: 20rem;">
                        <div class="card-header galery-img3 "> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para escritório</h4>
                              <p class="card-text">Fabricamos diversos móveis para escritório em geral</p>
                          </div>
                        </div>
                      </a>
                </div>

            </div>

              <div  id="" class="row container m-auto py-5">
                <div  class="col-md-4 zoom">
                    <a href="#img4">
                    <div id="card4" class="card mb-3" style="max-width: 20rem;">
                        <div class="card-header galery-img4"> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para sala de estar</h4>
                              <p class="card-text">Projetamos diversos móveis e decoraçoes</p>
                          </div>
                        </div>
                      </a>
                </div>

                <div  class="col-md-4 zoom">
                    <a href="#img5">
                    <div id="card5" class="card mb-3" style="max-width: 20rem;">
                        <div class="card-header galery-img5"> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para copa</h4>
                              <p class="card-text">Fabricamos mesas e cadeira para copa</p>
                          </div>
                        </div>
                      </a>
                </div>

                <div  class="col-md-4 zoom">
                    <a href="#img6">
                    <div id="card6" class="card mb-3 " style="max-width: 20rem;">
                        <div class="card-header galery-img6"> </div>
                          <div class="card-body">
                            <h4 class="card-title">Móveis para cozinha</h4>
                              <p class="card-text">Fabricamos diversos móveis para cozinha</p>
                          </div>
                        </div>
                      </a>
                </div>

            </div>

        </section>

        <div class="container ">
          <h1 class="lead text-center">Gostou de nossos produtos?</h1>
          <div class="row py-3"><a href="contato.html" class="btn btn-lg btn-outline-primary mx-auto ">Solicitar orçamento</a></div>
        </div>
  </div>
` }

const About = { template: '<p>Sobre</p>' }

const routes = {
  '/': Home,
  '/galeria': Galery,
  '/sobre': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})