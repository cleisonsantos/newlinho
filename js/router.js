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
  <a href="/galeria" class="btn btn-lg btn-outline-primary mx-auto">Ver mais...</a>
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
          <div class="row py-3"><a href="/contato" class="btn btn-lg btn-outline-primary mx-auto ">Solicitar orçamento</a></div>
        </div>
  </div>
` }

const Services = { template: `
<div>
<div class="container py-5 fadeIn">
         <h1 class="text-center">Serviços</h1>
          <div class="row ">
            <div class="col-md-12">
             <p class="lead text-center">Conheça um pouco mais sobre nossos serviços</p>
            </div>
          </div>
            <!--Coloquei os br só pra ver espaçamento-->


       <div class="row container">
         <div class="col-md-12">
          <section class="fadeIn">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 order-lg-2">
                  <div class="p-3">
                    <img class="img-fluid rounded-circle" src="img/serviços/ideia.jpg" alt="">
                  </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                  <div class="p-5">
                    <h2 class="">Sonhe e imagine</h2>
                    <p>Deixe o resto com a gente, desenvolvemos projetos,realizamos sonhos. Com a Linho Móveis isso é possivel, fabricamos moveis planejados de diversos seguimentos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="fadeIn">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="p-3">
                    <img class="img-fluid rounded-circle" src="img/serviços/qualidade.jpg" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <h2 class="">Qualidade e excelência</h2>
                    <p>Trabalhamos no ramo de móveis planejados á anos, contamos com profissionais qualificados e experientes, trabalhamos com madeiras e materiais de qualidade</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="fadeIn">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 order-lg-2">
                  <div class="p-3">
                    <img class="img-fluid rounded-circle" src="img/serviços/garantia.jpg" alt="">
                  </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                  <div class="p-5">
                    <h2 class="">Garantia de Serviço</h2>
                    <p>Nossos serviços possuem garantia em todos os pontos! pagamento de 50% e o restando na entrega final do produto</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br>
         </div>
       </div>
      </div>
</div>
` }

const Contact = { template: `
<div>
<div class="container py-5 text-center">
<div class="row ">
  <div class="col-md-12">
   <h1 class="pb-3">Contato</h1>
   <h1 class="lead">Deixe sua mensagem, peça um orçamento</h1>
  </div>
</div>
  <div class="row">
  <div class="col-md-6 mx-auto">

     <div class="form-group row">
     <div class="col-sm-10 mx-auto">

      <input type="text" class="form-control-plaintext border border-primary px-2" id="staticEmail" placeholder="Digite seu email">

    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-10 mx-auto">

     <input type="text" class="form-control-plaintext border border-primary px-2" id="staticEmail" placeholder="(xx) 99999999">

   </div>
 </div>

 <div class="form-group">

    <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Digite aqui a sua mensagem"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Enviar Mensagem</button>

 </div>

</div>


    
</div>

</div>
</div>
`}

const About = { template: `
<div>
<div class="container my-5 py-5">
         <h1 class="text-center pb-3">A Empresa</h1>
          <div class="row">
            <div class="col-md-6 mx-auto ">
              <h1 class="lead text-center">Sobre a Linho Móveis</h1>
              <p class="text-center">A Linho Móveis é uma empresa de fabricação de móveis planejados fundadas em meados de 2010,
                  está localizada na cidade de Ribeirão das Neves - MG , região metropolitada
               de Belo Horizonte , Linho Móveis trabalha com móveis planejados de diversos segmentos para sua casa ou empresa,possuimos
               tambem um grande portifólio de segmento para móveis de escritorio! Entre em contato e solicite seu orçamento sem compromisso!</p>
            </div>
          </div>
       </div>
</div>
` }

const routes = {
  '/': Home,
  '/galeria': Galery,
  '/servicos': Services,
  '/contato': Contact,
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