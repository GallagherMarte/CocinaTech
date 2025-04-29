import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
       
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("conexion exitosa a la base de datos")
})
.catch((error)=>{
    console.log("error en la conexion a la base de datos", error)
}) 

// Exportar con ES Modules
export default sequelize;