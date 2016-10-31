function lista() { //input y boton de guardar nombre de la lista
    var crearLista=document.getElementById("inputLista");//input
    crearLista.setAttribute("class","pull-left") ;
    var divCadaLista = document.createElement("div");
    var input=document.createElement("input"); 
    input.placeholder="ingresa nombre de la lista"
    inputLista.appendChild(input);
    crearLista.style.color="black";
    var botonNombreLista=document.createElement("button");//boton
    var texto=document.createTextNode("Guardar");
    botonNombreLista.appendChild(texto);
    divCadaLista.appendChild(input);
    divCadaLista.appendChild(botonNombreLista);
    crearLista.appendChild(divCadaLista);
    divCadaLista.style.background="#BFBFBB"; // estilos
    divCadaLista.style.display="inline-block";
    divCadaLista.style.margin="1%";
    
    botonNombreLista.onclick = function(){ //muestra nombre de la lista
        input.style.display="none";
        botonNombreLista.style.display="none";
        var formulario=document.getElementById("formulario");
        var nombreLista= document.createElement("h1");
        var nombreListaValue=input.value;
        var titulo=document.createTextNode(nombreListaValue);
        nombreLista.appendChild(titulo);
        divCadaLista.appendChild(nombreLista);
        divCadaLista.style.color="black";
        var botonAñadirLista=document.createElement("button");//boton para crear lista
        var texto=document.createTextNode("Añadir lista");
        botonAñadirLista.appendChild(texto);
        divCadaLista.appendChild(botonAñadirLista);
        botonAñadirLista.style.display="block";
        
        botonAñadirLista.onclick = function(){ //textarea para agregar tarjeta
            var tarjetaValue=document.getElementById("crearTarjeta");
            var textArea=document.createElement("textarea"); 
            divCadaLista.appendChild(textArea);
            var botonAgregarTarjeta=document.createElement("button");//boton para agregar tarjeta
            var texto=document.createTextNode("Agregar tarjeta");
            botonAgregarTarjeta.className="submit";
            botonAgregarTarjeta.appendChild(texto);
            divCadaLista.appendChild(botonAgregarTarjeta);

            botonAgregarTarjeta.onclick = function(){ //muestra tarjeta
                var crearTarjeta = document.getElementById("crearTarjeta");
                var tarjeta = document.createElement("div");
                var tarjetaValue = textArea.value;
                var t = document.createTextNode(tarjetaValue);
                tarjeta.appendChild(t);
                divCadaLista.appendChild(tarjeta)
                tarjeta.style.background="gray";
                tarjeta.style.margin="3%";
            }
        }
    }
}


