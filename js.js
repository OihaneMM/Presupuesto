//Variables y selectores
const formulario = document.querySelector('#formulario');
const listado = document.querySelector('#listaGastos');



//Eventos
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//Classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
        insertarPresupuesto( cantidad ) {
            const {presupuesto, restante} = cantidad;
            document.querySelector('#presuTotal').textContent = presupuesto;
            document.querySelector('#restante').textContent = restante;
        }

        imprimirAlerta(mensaje, tipo){
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('alert');
        };
}
 

//Funciones


const ui = new UI();
let presupuesto;

function preguntarPresupuesto(){

    const presupuestoUsuario = prompt("Indica tu presupuesto");

    //console.log(presupuestoUsuario);

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <=0 ){
        window.location.reload();
    };

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);

}

function agregarGasto(e) {
    e.preventDefault();

    const nombre = document.querySelector('#inputGasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    if( nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    }
}