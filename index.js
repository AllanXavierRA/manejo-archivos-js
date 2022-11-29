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

        return prodById != null ? prodById : null; 
    }

    getAll(){
        return JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    }

    deletById(id){
        const data = this.getAll();
        const prodById =  data.filter(p => {
            return p.id !== id;
        })

        fs.writeFileSync('./productos.txt', JSON.stringify(prodById))
    }

    deleteAll(){
        fs.unlinkSync('./productos.txt')
    }

}

const contenedor = new Contenedor('productos');
const obj1 =[
    {
        title: 'HP pavilon',
        price: 825,
        thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fssl-product-images.www8-hp.com%2Fdigmedialib%2Fprodimg%2Flowres%2Fc06717236.png&imgrefurl=https%3A%2F%2Fwww.hp.com%2Fec-es%2Fproducts%2Flaptops%2Fproduct-details%2F2100783925&tbnid=p7j6uBy8Xz0fgM&vet=12ahUKEwiFoYLd1NL7AhXfj4QIHRQsACcQMygAegUIARD6Ag..i&docid=DEI--xG1OQgbBM&w=800&h=600&q=laptop%20hp%20pavilion&client=firefox-b-d&ved=2ahUKEwiFoYLd1NL7AhXfj4QIHRQsACcQMygAegUIARD6Ag'
    },
    {
        title: 'dell latitude',
        price: 233,
        thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmobilestore.ec%2Fwp-content%2Fuploads%2F2021%2F11%2FDell-i3511-7125BLK-PUS-Mobile-Store-Ecuador.jpg&imgrefurl=https%3A%2F%2Fmobilestore.ec%2Fproducto%2Fdell-i3511-7125blk-pus%2F&tbnid=ro0HZ_3GKUF8bM&vet=12ahUKEwi3pp6a1dL7AhUXcTABHWnxAJIQMygAegUIARCJAw..i&docid=uwwCLuqzZsk0WM&w=800&h=800&q=dell&client=firefox-b-d&ved=2ahUKEwi3pp6a1dL7AhUXcTABHWnxAJIQMygAegUIARCJAw'
    },
    {
        title: 'ASUS zephyrus g14',
        price: 1500,
        thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41HpO12nbyS._SL500_.jpg&imgrefurl=https%3A%2F%2Fwww.yaesta.com%2Fb099qpv5bx-2021-asus-rog-zephyrus-g14-ga401ih-14-fhd-premium-gaming-laptop-amd-8-core-ryzen-7-4800hs-16gb-ram-512gb-pcie-ssd-nvidia-geforce-gtx-1650-teclado-retroiluminado-windows-10-woov-4k-cable-hdm%2Fp&tbnid=f2qnKh08xM0AsM&vet=12ahUKEwiixbut1dL7AhWjbDABHTEnBT0QMygEegUIARCnAg..i&docid=8m_HksKiQKC2_M&w=500&h=327&q=asus%20zephyrus%20g14&client=firefox-b-d&ved=2ahUKEwiixbut1dL7AhWjbDABHTEnBT0QMygEegUIARCnAg'
    },
] 




contenedor.save(obj1);
// console.log(contenedor.getById(4));
// contenedor.deleteAll();
// contenedor.deletById(1);

