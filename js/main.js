const Cervezas=function(sabor,presentacion,precio,stock){
    this.sabor=sabor;
    this.presentacion=presentacion;
    this.precio=precio;
    this.stock=stock;
}

let golden1=new Cervezas("golden","20", 25000, 5)
let golden2=new Cervezas("golden","5", 10000, 10)
let golden3=new Cervezas("golden","3", 5000, 20)

let stout1=new Cervezas("stout","20", 25000, 5)
let stout2=new Cervezas("stout","5", 10000, 10)
let stout3=new Cervezas("stout","3", 5000, 20)

let ipa1=new Cervezas("ipa","20", 25000, 5)
let ipa2=new Cervezas("ipa","5", 10000, 10)
let ipa3=new Cervezas("ipa","3", 5000, 20)

let amber1=new Cervezas("amber","20", 3000, 5)
let amber2=new Cervezas("amber","5", 10000, 10)
let amber3=new Cervezas("amber","3", 5000, 20)

let cerves =[golden1,golden2,golden3,stout1,stout2,stout3,ipa1,ipa2,ipa3,amber1,amber2,amber3]

const CompraUser=function(saborUser,presentUser,precioUser){
    this.saborUser=saborUser;
    this.presentUser=presentUser;
    this.precioUser=precioUser;
} 
let compraUserlist=[]

function filtrarCerve(){
    let cerveUser=prompt("Ingresa el Nombre de la cerveza de tu gusto **GOLDEN | STOUT | IPA | AMBER**")
    let answer=cerves.filter((cerveza)=> cerveza.sabor.includes(cerveUser))

    if(answer.length>0){
        switch (cerveUser) {
            case "golden":
                cerveCompra=cerveUser
                break;
            case "stout":
                cerveCompra=cerveUser 
                break;
            case "ipa":
                cerveCompra=cerveUser 
                break;
            case "amber":
                cerveCompra=cerveUser
                break;
            }
            console.table(answer)
        }else{
            alert("No vendemos esa Cerveza selecciona la opcion correcta")
            filtrarCerve()
        }
}


function filtrarPres(){
    let presUser=prompt("Ingresa la presentacion el litros que deseas comprar **| 20 | 5 | 3 |**")
    let present=cerves.filter((cerveza)=> cerveza.presentacion.includes(presUser))

    if(present.length>0){
        switch (presUser){
            case "20": 
                presentCompra=presUser
                precioCompra=cerves[0].precio
                break;
            case "5": 
                presentCompra=presUser
                precioCompra=cerves[1].precio
                break;
            case "3": 
                presentCompra=presUser
                precioCompra=cerves[2].precio
                break;
        }
        agregarCompra()
    }else{
        alert("No vendemos esa Presentacion selecciona la opcion correcta")
        filtrarPres()
    }
    let seguir=prompt("Seguir Comprando? S | N").toUpperCase().trim()
        switch (seguir){
            case "S":
                filtrarCerve()
                filtrarPres()
                break;
            case "N":
                break;        
        }
}

function edadMay(){
    if (edad >= 18){
        let nombreUser = prompt("Ingresa tu nombre")
        nombre = nombreUser
        alert ("Bienvenido " +nombre+" Presiona enter o aceptar para continuar")
    }else{
        alert("Sos menor de edad NO! podes comprar")
    }
}

function agregarCompra(){
    let compra=new CompraUser(cerveCompra,presentCompra,precioCompra)
    compraUserlist.push(compra)
    totalCompra=totalCompra+precioCompra
}

function compraTotal(){
    console.log ("*******************************************")
    console.log ("Gracias "+nombre+" por elegir THE CAVE BEER")
    console.log ("El detalle de tu compra es")
    console.table(compraUserlist)
    console.log ("Su total en $ es "+totalCompra)
}

const anioVigen = 2023
let nombre = 0
let cerveCompra = 0
let presentCompra = 0
let precioCompra = 0
let totalCompra = 0

alert ("Somos THE CAVE BEER presiona aceptar para continuar")
let anioDeNac = parseInt(prompt("Ingresa tu año de nacimiento AAAA"))
let edad = anioVigen - anioDeNac

edadMay()
filtrarCerve()
filtrarPres()
compraTotal()







