import React from "react";

export default function ListClients() {
    const clients = [
      { id: 1, name: "Cliente A" },
      { id: 2, name: "Cliente B" },
      { id: 3, name: "Cliente C" },
      { id: 4, name: "Cliente D" },
      { id: 5, name: "Cliente E" },
      { id: 6, name: "Cliente F" },

    ];
  
    return (
      <div className=" max-h-100 max-[1100px]:w-full ">

        <table className=" bg-azul-100 max-[1100px]:w-full  ">
          <thead className="border ">
        
          </thead>
          <tbody >
            {clients.map(client => (
              <tr className="h-24" key={client.id}>
                <td className=" border-b-2 px-10 font-semibold">{client.name}</td>
                <td className="flex-1 h-24 space-x-2 border-b-2 p-1">
                  <button className="border rounded bg-azul-500  text-white">Editar</button>
                  <button className="border rounded bg-azul-500 text-white">Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  