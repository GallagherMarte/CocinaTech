import sequelize from "../config/dataBase.js"
import Usuario from "./usuario.js"
//Sincronizar los modelos con la base de datos

sequelize.sync({alter:false})
.then(()=>{
    console.log("Tablas sincronizadas")
})
.catch((error)=>{
    console.log("Error al sincronizar las tablas", error)
})

export default Usuario