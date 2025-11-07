import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createClient } from "../api/contactApi";

function ContactForm() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    setLoading(true)
     try {
        const response = await createClient(data);
        if (response.success) {
          alert("Se ha registrado correctamente");
        } else {
          alert("Error: " + result.error);
        }
        console.log(response);
      } catch (error) {
        console.log("Error: ", error);
      }finally{
        setLoading(false)
      }

  };


  return (
    <div className="container">
      <h2 className="text-center mb-4">Contactanos</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 shadow rounded bg-ligth"
      >
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            {...register("name", {
              required: true,
              maxLength: 10,
              minLength: 3,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name?.type === "required" && (
            <div className="alert alert-danger mt-2" role="alert">
              Campo nombre es requerido!
            </div>
          )}
          {errors?.name?.type === "maxLength" && (
            <div className="alert alert-danger mt-2" role="alert">
              Nombre debe tener maximo de 10 caracteres!
            </div>
          )}
          {errors?.name?.type === "pattern" && (
            <div className="alert alert-danger mt-2" role="alert">
              solo permite caracteres alfabetico!
            </div>
          )}
          {errors?.name?.type === "minLength" && (
            <div className="alert alert-danger mt-2" role="alert">
              Nombre debe tener minimo de 3 caracteres!
            </div>
          )}
        </div>
        <div className="mb-3">
          {/* Correo electronico del cliente */}
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="form-control"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <div className="alert alert-danger mt-2" role="alert">
              Campo email es requerido!
            </div>
          )}
        </div>
        <div className="mb-3 ">
          {/* mensaje */}
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            id=""
            className="form-control"
            {...register("mensaje", {
              required: true,
            })}
          ></textarea>
          {errors.mensaje && (
            <div className="alert alert-danger mt-2" role="alert">
              Campo mensaje es requerido!
            </div>
          )}
        </div>
        <div className="mb-3" disabled={loading}>
          <button className="btn btn-primary " type="submit">
              {loading ? "Enviando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
