import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../schemas/authSchema";
import { register } from "../api/auth";
import { Toaster, toast } from "react-hot-toast";

function Register() {
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.prevenDefaut()
    setLoading(true)

    try {
        const token = await register(username,password)
        const tokenStr = JSON.stringify(token)

        if(tokenStr.includes('ya existe')){
            toast.error('❌ El usuario ya existe')
        }

        if(!token || tokenStr.includes('undefined')){
            toast.error('❌ Error al crear la cuenta')
        }

        if(tok)
    } catch (error) {
        
    }
  }

  return (

  )
}

export default Register;
