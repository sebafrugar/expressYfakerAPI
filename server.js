const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor () {
        this._id =  faker.datatype.number();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono =  faker.phone.phoneNumber();
        this.email = faker.internet.exampleEmail();
        this.contraseña = faker.datatype.uuid();
    }
}

class Empresa{
    constructor (){
        this._id =  faker.datatype.number();
        this.name= faker.name.title();
        this.direccion = {
            calle :  faker.address.direction(),
            cuidad: faker.address.cityName(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country(),
    }}
}


app.get("/api/users/new",(req,res)=>{
    const nuevoUsuario = new Usuario()
    res.json(nuevoUsuario)
})
app.get("/api/companies/new",(req,res)=>{
    const nuevaCompañia = new Empresa()
    res.json(nuevaCompañia)
})
app.get("/api/user/companies",(req,res)=>{
    const nuevoUsuario = new Usuario()
    const nuevaCompañia = new Empresa()
    res.json({usuario :nuevoUsuario, empresa:nuevaCompañia})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );