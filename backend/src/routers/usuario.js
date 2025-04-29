import express from 'express';
import { GetUsuarios, PostUsuario  } from '../controllers/usuarioController.js';


const router = express.Router();

router.get('/usuarios', GetUsuarios);
router.post('/usuarios', PostUsuario);

export default router;