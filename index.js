const fs = require('fs');

class Contenedor{

    constructor(nombreArchivo){
        this.archivo = nombreArchivo;
    }

    save(objeto){
        

        objeto.forEach((i, j) => {
            i['id'] = j + 1;
        });
        fs.writeFileSync(`./${this.archivo}.txt`, JSON.stringify(objeto));

        return objeto.length;

        
    }

    getById(id){
        const data = this.getAll();
        const prodById =  data.find(p => {
            return p.id === id;
        })

        return prodById != null
    }

    getAll(){

        
        return JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    }

    deletById(){

    }

    deleteAll(){

    }

}

const contenedor = new Contenedor('productos');
const obj1 =[
    {
        title: 'laptop',
        price: 1500,
        thumbnail: 'url'
    },
    {
        title: 'dell',
        price: 1500,
        thumbnail: 'urasdasd'
    },
    {
        title: 'ASUS',
        price: 1500,
        thumbnail: 'url'
    },
] 






contenedor.save(obj1);
contenedor.getById(5);

