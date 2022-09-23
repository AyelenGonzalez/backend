class APIproductos{

    constructor(){
        this.productos = []
        this.id = 0
    }

    getAll(){
        return [...this.productos]
    }

    getById(id){
        const producto = this.productos.find(e => e.id == id)
        return producto || {error: "Producto no encontrado"}
    }

    add(p){
        const producto = {...p, id: ++this.id}
        this.productos.push(producto)
        return producto
    }

    update(p, id){
        const index = this.productos.findIndex(e => e.id === id)
        const producto = {...p, id: this.productos[index].id}
        if(index !== -1){
            this.productos[index] = producto
        }else{
            return {error: "No se encontró el producto a actualizar"}
        }
    }

    deleteById(id){
        const index = this.productos.findIndex(producto => producto.id === id)
        this.productos.splice(index, 1)
    }

    deleteAll(){
        this.productos = []
    }

}

module.exports = APIproductos