//ENTREGABLE
class ProductManager {
    constructor(){
        this.products=[]
        this.incremental=0
    }
    addProduct(title, description,price,thumbnail,code,stock){
         if (title,description,price,thumbnail,code,stock==null||undefined){
            return console.log(`No se pudo agregar el producto ${title}, ya que no se completaron todos los datos`);
        }
        
       if (this.products.find((e)=>e.code==code)) {
       return console.log(`Error, ya existe un producto con el código ${code}`)
       }
       
        this.products.push({
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
            id:this.incremental++
        })
       
    }

    getProducts(){
        return console.log(this.products);
    }
    getProductById(id){
      const product=this.products.find((prod)=>prod.id===id);

       if(product){
        console.log(product);
       }
       else{
        console.log(`No se encontró el producto con el id ${id} `);
       }
    }

}
const Juanse= new ProductManager
Juanse.addProduct(
    "Pera", "sabrosas",10,"ruta1",15,10
)
Juanse.addProduct(
    "Manzana", "sabrosas",11,"ruta2",16,11
)
Juanse.addProduct(
    "Sandia", "gigantes",12,"ruta3",17,12
)
Juanse.addProduct(
    "Melon", "gigantes",12,"ruta3",16,12
)
Juanse.addProduct(
    "Queso", 12,"ruta3",16,12
)

Juanse.getProducts()
Juanse.getProductById(1)
Juanse.getProductById(4)

import { createRequire } from "module";
const require = createRequire(import.meta.url);


const { error, log } = require("console");
const fs = require("fs")
const ruta="./ruta.txt"
// CREAR ARCHIVO
fs.writeFileSync(ruta, "Hola Mundo")

// LEER ARCHIVO - 1er parametro path, 2do la codificacion
const content= fs.readFileSync(ruta, "utf-8")
console.log(content);

// VERIFICAMOS SI EXISTE
const contenido2=fs.readFileSync("./ruta.txt", "utf-8")
if (fs.existsSync("sasd.txt")) {
    let respuesta = fs.readFileSync("sasd.txt", "utf-8")
    console.log(respuesta)

}   else{
    console.log("No existe el archivo");
}

// ACTUALIZAR CONTENIDO

fs.writeFileSync(ruta, "info actualizada")

// AGREGAR CONTENIDO

fs.appendFileSync(ruta, " ¿como están?")

// VOLVEMOS A LEER
const content2=fs.readFileSync(ruta, "utf-8")
console.log(content2);
// ELIMINAMOS EL ARCHIVO
fs.unlinkSync(ruta)

const conCallback= "./ejemploConCallback.txt"
fs.writeFile(conCallback,"Nuevo archivo con CB", (error)=>{
    //3er parametros es el callback q pregunta si hay un error:
    if (error) {
        return console.log("no podemos crear el archivo");
    }
})

// LEEMOS

fs.readFile(conCallback,"utf-8", (error, contenido)=>{
    if(error)return console.log("no podemos leer")
    console.log(contenido);
})
// AGREGAMOS
fs.appendFile(conCallback," + contenido agregado", (error)=>{
    if(error)return console.log("no podemos leer")
})

// ELIMINAMOS

fs.unlink(conCallback, (error)=>{
    if(error) return console.log("no se pudo borrar")
})

//PROMISES

const textoPromises= "./archivoDePromesas"
const opAsync= async()=>{
    //CREAR ARCHIVO
    await fs.promises.writeFile(textoPromises, "nuevo Archivo")

    //LEER ARCHIVO
    let respuesta= await fs.promises.readFile(textoPromises,"utf-8")
    console.log(respuesta);

     //AGREGAR TEXTO
    let agregado= await fs.promises.appendFile(textoPromises," agregado")
    
    //AGREGAR TEXTO
    let eliminado= await fs.promises.unlink(textoPromises)
    
}

opAsync()

const personas = [
    {name: "Pepe", lastName:"Argento", age: 28},
    {name: "Moni", lastName:"Argento", age: 25},
    {name: "Coki", lastName:"Argento", age: 12},
    {name: "Paola", lastName:"Argento", age: 13},
]

// const fileArgento= "./archivoArgento.json"

// const saveFileArgento  = async () =>{
//     await fs.promises.writeFile(fileArgento, JSON.stringify(personas, null,2))
// }

// //saveFileArgento()

// const readFileArgento = async () =>{
//    const resp= await fs.promises.readFile(fileArgento, "utf-8")

// const newArray=JSON.parse(resp)
// console.log("ESTE ES EL NUEVO ARRAY=",newArray)}

// const DeleteFileArgento = async () =>{
//     await fs.promises.unlink(fileArgento)
// }

// //readFileArgento()
// DeleteFileArgento()

// CLASE 6

//const http= require("http")
//const server=http.createServer((req,res)=>{
//    res.end("Hola Mundo!")
//})
const PUERTO=8080
//server.listen(PUERTO, ()=> console.log("We are listening you"))

const express = require("express")
const app = express();
app.use(express.urlencoded({ extended:true }));
app.get("/", (req,res)=>{
    //Cuando uso "/" hacemos referencia al home
    res.send("Hola guachin!")
})

app.listen(PUERTO,()=>{
    console.log(`escuchando en el servidor ${PUERTO}`);
})

const myProds=[
    {id:1, name: "prod1", precio:200},
    {id:2, name: "prod2", precio:210},
    {id:3, name: "prod3", precio:220},
    {id:4, name: "prod4", precio:230}
]

app.get("/products", (req, res)=>{
res.send(myProds)
})

app.get("/products/:id", (req, res)=>{
    let id= req.params.id
    const products= myProds.find(prod=>prod.id==id)
    if(products){
        res.send(products)
    }
    else{
        res.send("Error 404. Not Found.")
    }
})

