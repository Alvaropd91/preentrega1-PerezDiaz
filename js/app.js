/*mezcladora de colores*/

  do{

    let color1 = prompt("Mezcladora de colores: elije y combina dos colores primarios (amarillo,azul.rojo) para crear un color secundario").toLowerCase();

    if(color1 == "azul" || color1 == "amarillo" || color1 == "rojo"){

    /*  */ let color2 = prompt("Escribe el segundo color a combinar").toLowerCase();
   
   switch (color1) {
    case "amarillo":
         if(color1 == "amarillo" && color2 == "azul"){
            alert("la combinacion de color amarillo y azul forma el color verde")
         }else if(color1 == "azul" && color2 == "amarillo"){
            alert("la combinacion de color azul y amarillo forma el color verde")
        }else if(color1 == "amarillo" && color2 == "amarillo"){
            alert("la combinacion de color amarillo y amarillo solo es amarillo ")
        }else if(color1 == "amarillo" && color2 == "rojo"){
            alert("la combinacion de color amarillo y rojo crean el color naranja")
         }else{
            alert("no estas mezclando colores primarios ")
         }
        break;
    case "rojo":
            if(color1 == "rojo" && color2 == "amarillo"){
               alert("la combinacion de color rojo y amarillo forman el color naranja")
            }else if(color1 == "amarillo" && color2 == "rojo"){
               alert("la combinacion de color amarillo y rojo forman el color naranja")
            }else if(color1 == "rojo" && color2 == "rojo"){
               alert("la combinacion de color rojo y rojo forman el color rojo")
            }else if(color1 == "rojo" && color2 == "azul"){
                alert("la combinacion de color rojo y azul forman el color morado")
            }else{
               alert("no estas mezclando colores primarios")
            }
           break;
    case "azul":
            if(color1 == "azul" && color2 == "rojo"){
               alert("la combinacion de color azul y rojo crea el color morado")
            }else if(color1 == "rojo" && color2 == "azul"){
               alert("la combinacion de color rojo y azul crean el color morado")
            }else if(color1 == "azul" && color2 == "azul"){
                alert("la combinacion de color azul y azul es igual a azul")
            }else if(color1 == "azul" && color2 == "amarillo"){
                alert("la combinacion de color azul y amarillo es igual a verde")
            }else{
               alert("no estas mezclando colores primarios")
            }
           break;
    default:
        alert("debe elegir 'amarillo', 'rojo' o 'azul'")
        break;
   }

   rta = prompt("Si desea salir precione 'ESC' de lo contrario pulse cualquier otro boton para seguir jugando" );
    }else{
        alert("debe elegir 'amarillo', 'rojo' o 'azul'")
    }
  }while(rta != "ESC")
