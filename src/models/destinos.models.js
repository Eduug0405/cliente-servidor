const db = require('../config/db.config')

class Destino{
   constructor({id, nombre}){
    this.id = id;
    this.nombre = nombre;
   }

   static async getAll() {
      try {
          const connection = await db.createConecction();
          let query = "SELECT id, nombre from destinos";
          const [rows] = await connection.query(query);
          connection.end();
          return rows;
      } catch (error) {
   
          console.error("Error en getAll:", error.message);
          return [];
      }
  }
  
 
}

module.exports = Destino;