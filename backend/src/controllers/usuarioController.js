import Usuario  from "../models/usuario.js";


const GetUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    }catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}

const PostUsuario = async (req, res) => {
    try{
        const { Nombre, Apellido, Correo, Contraseña } = req.body;
        const nuevoUsuario = await Usuario.create({ Nombre, Apellido, Correo, Contraseña });
        res.status(201).json(nuevoUsuario);
    }catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
}


export  {
    GetUsuarios,
    PostUsuario
}
