// função arrow function
const galeria = () => {

    // seleciona todas as imagens minitaturas
    var miniaturas = document.querySelectorAll(".galeria_miniatura img")
    // console.log(miniaturas)

    //Iterar sobre miniauras
    miniaturas.forEach(function(miniatura){
        // console.log(miniatura)

        //em cada imagem adcionar um ovinte de click 
        miniatura.addEventListener("click",function () {
            // console.log(this.src)
            document.getElementById("foto_grande").src = this.src
        })
    })

}

galeria()