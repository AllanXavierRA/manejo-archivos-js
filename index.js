const fs = require('fs');

class Contenedor{

    constructor(nombreArchivo){
        this.archivo = nombreArchivo;
    }

    save(objeto){
        fs.writeFileSync(`./${this.archivo}.json`, objeto);
    }

    getById(id){

    }

    getAll(){

    }

    deletById(){

    }

    deleteAll(){

    }

}

const contenedor = new Contenedor('productos');
const obj1 = 
    {
        title: 'laptop',
        price: 1500,
        thumbnail: 'url'
    }

contenedor.save(obj1);