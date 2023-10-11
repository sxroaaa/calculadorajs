const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton"); //arreglos 1. para lo que pasa en pantalla 2. para lo que pasa con los botones

botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        const botonOn =boton.textContent;
        if (boton.id=== "limpiar"){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar"){

            if (pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice (0, -1);
            }
            
            return;
        }
        if (boton.id === "igual"){
            try{pantalla.textContent = eval (pantalla.textContent);
            }catch {
                pantalla.textContent = "¡Error!"
            }
            
            return;
        }
        if (pantalla.textContent === "//"){
            pantalla.textContent = "¡Error!"

            return;
        }

    

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOn;
        }else {
            pantalla.textContent += botonOn;

            return;
        }
   


        if (pantalla.textContent === "0"){
            pantalla.textContent= botonOn;
        }else {
            pantalla.textContent = botonOn;
        }


    })
})