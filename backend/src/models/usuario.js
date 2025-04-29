//tabla de prueva 
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/dataBase.js";


const Usuario = sequelize.define('Usuario', {
    id_usuario: {
       type: DataTypes.INTEGER,
       primaryKey: true,
         autoIncrement: true, 
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Apellido: {
        type: DataTypes.STRING,
    },
    Correo: {
        type: DataTypes.STRING,
    },
    Contraseña: {
        type: DataTypes.STRING,
    },
})

export default Usuario;
