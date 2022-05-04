//API de los Estados de EEUU
const botonUsa = document.querySelector('.usa')
// Agregar listener a nuestro boton para que haga la funcion con el click()
botonUsa.addEventListener("click", function(){
    //valriables
    const search = document.querySelector('#search');
    const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const tvShow=[];
    let sugest = document.querySelector('.sugesst');

//donde desglosamos las APIs
    fetch(api)
        .then(blob=>blob.json())
        .then(data => tvShow.push(...data));//con los puntos desempaquetamos el array
        console.log(tvShow);
    
    //creamos una funcion para poder un filtrado de busquedad
    function find(words, tvShow){
        return tvShow.filter(place =>{
            let regex = new RegExp(words,'gi'); //aqui le decimos que g global y i minusculas mayusculas
            return place.city.match(regex);
        });
    };

//en esta funcion es donde se pinta en el HTML, con los datos que se filtra por el usaurio
    function displayCountry(event){
        var matchArray = find(event.target.value, tvShow);
        const html = matchArray.map(fint=>{
            let reg = RegExp(event.target.value, 'gi');
            let tvname = fint.city.replace(reg,
                 `<span class=hl>${event.target.value}</span>`);

            return `
            <p>
            <span class="name">${tvname} </span>
            </p>
            ` //aqui se retorna el resultado de la API
        }).join('');//el join es para no tener demasiado espacio
        sugest.innerHTML=html; //aqui es donde se pinta 

    }
//pasamos a input a los metodos de los eventos
    search.addEventListener('change',displayCountry);
    search.addEventListener('keyup',displayCountry);

    console.log("Le has dado click USA");
     
   
});
///////////////////////////////////////////////////////
//API de PELICULAS 
const botonPeli = document.querySelector('.peli')
botonPeli.addEventListener("click", function(){
    
    const search = document.querySelector('#search');
    const api = 'https://api.tvmaze.com/shows';
    const tvShow=[];
    let sugest = document.querySelector('.sugesst');

    fetch(api)
        .then(blob=>blob.json())
        .then(data => tvShow.push(...data));//con los puntos desempaquetamos el array, para poder filtrar por el nombre
      
    console.log(tvShow)

    function findShowTV(words, tvShow){
        return tvShow.filter(fint =>{
            let regex = new RegExp(words,'gi'); 
            return fint.name.match(regex);
        });
    };

    function displayMovie(event){
        var matchArray = findShowTV(event.target.value, tvShow);
        const html = matchArray.map(fint=>{
            let reg = RegExp(event.target.value, 'gi');
            let tvname = fint.name.replace(reg, `<span class=hl>${event.target.value}</span>`);

            return `
            <p>
            <span class="name">${tvname} </span>
            </p>
            ` 
        }).join(''); 
        sugest.innerHTML=html;

    }
//aqui cuando se da click o el usuario introduzca las palabras por el input
    search.addEventListener('change',displayMovie)
    search.addEventListener('keyup',displayMovie)

    console.log("Le has dado click peli")

});
//////////////////////////////////////////////////////
//API de BREAK BAD
const botonOtro = document.querySelector('.otro')
botonOtro.addEventListener("click", function(){
      //varaibles
      const search = document.querySelector('#search');
      const api = 'https://www.breakingbadapi.com/api/characters';
      const tvShow=[];
      let sugest = document.querySelector('.sugesst');

      
  //parte logica 
      fetch(api)
          .then(blob=>blob.json())
          .then(data => tvShow.push(...data));
        
      console.log(tvShow)
     
      function find(words, tvShow){
          return tvShow.filter(fint =>{
              let regex = new RegExp(words,'gi'); 
              return fint.name.match(regex);
          });
      };
  
      function displayBreakBad(event){
        sugest.innerHTML='';
          var matchArray = find(event.target.value, tvShow);
          const html = matchArray.map(fint=>{
              let reg = RegExp(event.target.value, 'gi');
              let tvname = fint.name.replace(reg, `<span class=hl>${event.target.value}</span>`);
  
              return `<p><span class="name">${tvname} </span></p>  ` 
          }).join('');
          sugest.innerHTML=html;
      }
      search.addEventListener('change',displayBreakBad)
      search.addEventListener('keyup',displayBreakBad)

    console.log("Le has dado click otross")
});

