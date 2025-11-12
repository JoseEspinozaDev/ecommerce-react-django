import {z} from 'zod'

export const registerSchema = z.object({
    username: z
    .string()
    .min(3,'El usuario debe tener al menos 3 caracteres')
    .regex('/^[a-zA-Z0-9_]+$/, "Solo letras, números y guion bajo"'),
    password: z
    .string()
    .min(8,'La contraseña debe tener un minimo de 8 caracteres'),
    confirm: z.string(),

}).refine((data) => data.password = data.confirm,{
    message: 'Las contraseñas deben coinicidir',
    path: 'confirm_password'
})