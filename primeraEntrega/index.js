class Usuario{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBookNames(){
        const nombresLibros = [];
        this.libros.forEach(el => {
            nombresLibros.push(el.nombre);
        });
        return nombresLibros;
    }

}

const user = new Usuario("juan", "perez");
console.log(user);
user.addBook("jardines", "lei don");
user.addMascota("perro");
user.addMascota("gato");
console.log(user.getBookNames());
