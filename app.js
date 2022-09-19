var listaDestinos = [
    "https://i.pinimg.com/736x/7c/fa/e1/7cfae12aebbc401b691f48e358752854.jpg",
    
    "https://cdn.pixabay.com/photo/2017/11/09/22/20/campos-do-jordao-2934837_960_720.jpg",
    
    "https://naturam.com.br/wp-content/uploads/2019/03/nautico-praia-clube-caldas-novas-go.jpg",
    
  ];
  
   listaDestinos.push(
  "https://www.gov.br/mma/pt-br/assuntos/noticias/inscricoes-abertas-para-curso-de-conducao-ambiental-no-ecoturismo/1150X50014.jpg"
  );
  
  for (var indice = 0; indice < listaDestinos.length; indice++) {
    document.write("<img src=" + listaDestinos[indice] + ">");
  }