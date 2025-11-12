import {email, z} from 'zod'

export const registerSchema = z.object({
    username: z
    .string()
    .min(3,'El usuario debe tener al menos 3 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/,{
        message:'Solo letras, números y guion bajo'
    }),
    email: z.string().email('Correo electronico invalido'),
    password: z
    .string()
    .min(3,'La contraseña debe tener un minimo de 3 caracteres'),
    confirm_password: z.string(),

}).refine((data) => data.password === data.confirm_password,{
    message: 'Las contraseñas no coincididen',
    path: ['confirm_password']
}) 