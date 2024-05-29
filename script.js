const mybutton = document.getElementById("boton1");
mybutton.addEventListener("click", function()
{
    if(window.confirm("Usted es mayor de edad? Aceptar/SI   Cancelar/NO"))
        {
            var enabled = document.getElementById("edadv");
            enabled.setAttribute("href", "./paginas/compra_autos.html");
        }
        else
        {
            var validate = document.getElementById("edadv");
            validate.removeAttribute("href");
        }
})

const mybutton2 = document.getElementById("boton2");
mybutton2.addEventListener("click", function()
{
    if(window.confirm("Usted es mayor de edad? Aceptar/SI   Cancelar/NO"))
        {
            var enabled2 = document.getElementById("edadv2");
            enabled2.setAttribute("href", "./paginas/compra_autos.html");
        }
        else
        {
            var validate2 = document.getElementById("edadv2");
            validate2.removeAttribute("href");
        }
})

const mybutton3 = document.getElementById("boton3");
mybutton3.addEventListener("click", function()
{
    if(window.confirm("Usted es mayor de edad? Aceptar/SI   Cancelar/NO"))
        {
            var enabled3 = document.getElementById("edadv3");
            enabled3.setAttribute("href", "./paginas/compra_autos.html");
        }
        else
        {
            var validate3 = document.getElementById("edadv3");
            validate3.removeAttribute("href");
        }
})