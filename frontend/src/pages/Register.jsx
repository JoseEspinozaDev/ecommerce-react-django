import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../schemas/authSchema";
import { register as registerUser } from "../api/auth";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await registerUser(
        data.username,
        data.email,
        data.password,
        data.confirm_password
      );
      console.log(res)
    
      if (res?.success) {
        toast.success(res.message);
        localStorage.setItem("token", res.token);
        navigate("/login");
      } else {
        toast(res?.message || "Error al registrar usuario",{
          icon: 'ℹ️'
        });
      }

    } catch (err) {
      toast.error("Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {["username", "email", "password", "confirm_password"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.replace("_", " ")}</label>
            <input
              type={field.includes("password") ? "password" : "text"}
              {...register(field)}
              className={`form-control ${errors[field] ? "is-invalid" : ""}`}
            />
            {errors[field] && (
              <div className="invalid-feedback">{errors[field]?.message}</div>
            )}
          </div>
        ))}

        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-100"
        >
          {loading ? "Creando cuenta ..." : "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default Register;
