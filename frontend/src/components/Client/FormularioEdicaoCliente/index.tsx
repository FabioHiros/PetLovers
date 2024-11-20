import { useForm, useFieldArray } from "react-hook-form";
import React, { useEffect } from "react";
import { z } from "zod";
import useUpdateClient from "../../../Hooks/ClientHooks/EditarCliente";

// Validation schema using Zod
const clientSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  nomeSocial: z.string().min(1, "Nome Social é obrigatório"),
  email: z.string().email("Email inválido").nullable(),
  endereco: z.object({
    estado: z.string().min(1, "Estado é obrigatório"),
    cidade: z.string().min(1, "Cidade é obrigatória"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    rua: z.string().min(1, "Rua é obrigatória"),
    numero: z.string().min(1, "Número é obrigatório"),
    codigoPostal: z.string().min(1, "Código Postal é obrigatório"),
    // informacoesAdicionais: z.string().optional(),
  }),
  phones: z.array(
    z.object({
      ddd: z.string().min(1, "DDD é obrigatório"),
      numero: z.string().min(1, "Número é obrigatório"),
    })
  ).min(1, "Deve haver pelo menos um telefone"),
});

interface FormularioEdicaoClienteProps {
  clientData: any;
  onClose: () => void;
}

const FormularioEdicaoCliente: React.FC<FormularioEdicaoClienteProps> = ({
  clientData,
  onClose,
}) => {
  const { mutate: updateClient, isLoading, isError, error } = useUpdateClient();
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: clientData,
    resolver: async (data) => {
      const result = await clientSchema.safeParseAsync(data);
      return {
        values: result.success ? data : {},
        errors: result.success ? {} : result.error.format(),
      };
    },
  });

  const { fields: telefoneFields, append: addTelefone } = useFieldArray({
    control,
    name: "phones",
  });
  // console.log(clientData)
  // Populate the form with client data
  useEffect(() => {
    if (clientData) {
      setValue("name", clientData.name);
      setValue("nomeSocial", clientData.nomeSocial);
      setValue("email", clientData.email);
      setValue("endereco", clientData.endereco);
      clientData.phones.forEach((phone:number, index:number) => {
        setValue(`phones.${index}.ddd`, phone.ddd);  // Set DDD
        setValue(`phones.${index}.numero`, phone.numero);  // Set Numero
      });
    }
  }, [clientData, setValue]);

  const onSubmit = (data) => {
    console.log(data)
    updateClient(data, {
      onSuccess: () => {
        console.log("User updated successfully");
        onClose();
      },
      onError: (error) => {
        console.error("Error updating user:", error);
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-end">
          <button onClick={onClose}>X</button>
        </div>
        <h3 className="text-2xl font-bold mb-4">Editar Cliente</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Client Information */}
          <div>
            <input
              {...register("name")}
              placeholder="Nome"
              className="form-input mb-4 w-full"
            />
            {errors.nome && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("nomeSocial")}
              placeholder="Nome Social"
              className="form-input mb-4 w-full"
            />
            {errors.nomeSocial && <p className="text-red-500 text-xs">{errors.nomeSocial.message}</p>}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="form-input mb-4 w-full"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Address Section */}
          <h4 className="text-lg font-semibold">Endereço:</h4>
          <div>
            <input
              {...register("endereco.estado")}
              placeholder="Estado"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.estado && <p className="text-red-500 text-xs">{errors.endereco.estado.message}</p>}
          </div>
          <div>
            <input
              {...register("endereco.cidade")}
              placeholder="Cidade"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.cidade && <p className="text-red-500 text-xs">{errors.endereco.cidade.message}</p>}
          </div>
          <div>
            <input
              {...register("endereco.bairro")}
              placeholder="Bairro"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.bairro && <p className="text-red-500 text-xs">{errors.endereco.bairro.message}</p>}
          </div>
          <div>
            <input
              {...register("endereco.rua")}
              placeholder="Rua"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.rua && <p className="text-red-500 text-xs">{errors.endereco.rua.message}</p>}
          </div>
          <div>
            <input
              {...register("endereco.numero")}
              placeholder="Número"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.numero && <p className="text-red-500 text-xs">{errors.endereco.numero.message}</p>}
          </div>
          <div>
            <input
              {...register("endereco.codigoPostal")}
              placeholder="Código Postal"
              className="form-input mb-2 w-full"
            />
            {errors.endereco?.codigoPostal && <p className="text-red-500 text-xs">{errors.endereco.codigoPostal.message}</p>}
          </div>
          {/* <div>
            <textarea
              {...register("endereco.informacoesAdicionais")}
              placeholder="Informações Adicionais"
              className="form-input mb-4 w-full"
            />
          </div> */}

          {/* Dynamic Telefone Section */}
          <h4 className="text-lg font-semibold">Telefones:</h4>
          {telefoneFields.map((field, index) => (
            <div key={field.id} className="flex mb-2">
              <input
                {...register(`phones.${index}.ddd`)}
                placeholder="DDD"
                className="form-input w-1/4 mr-2"
              />
              {errors.phones?.[index]?.ddd && <p className="text-red-500 text-xs">{errors.phones[index].ddd.message}</p>}

              <input
                {...register(`phones.${index}.numero`)}
                placeholder="Número"
                className="form-input w-3/4 flex-2"
              />
              {errors.phones?.[index]?.numero && <p className="text-red-500 text-xs">{errors.phones[index].numero.message}</p>}
            </div>
          ))}
          <button type="button" onClick={() => addTelefone({ ddd: "", numero: "" })}>
            + Adicionar Telefone
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 mt-4 rounded"
          >
            {isLoading ? "Salvando..." : "Salvar Alterações"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioEdicaoCliente;
