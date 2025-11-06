import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <div className="alert alert-danger mt-2" role="alert">
              Campo nombre es requerido!
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
        <div className="mb-3">
          <button className="btn btn-primary " type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
