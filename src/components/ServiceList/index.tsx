
export default function ListServices() {
  const servicos = [
    { id: 1, name: "Serviço A", price: "R$ 100" },
    { id: 2, name: "Serviço B", price: "R$ 150" },
    { id: 3, name: "Serviço C", price: "R$ 200" },
    // Add more services as needed
  ];

  return (
    <div className="max-h-100 max-[1100px]:w-full">
      
      <table className="bg-azul-100 max-[1100px]:w-full">
        <thead className="border">
          <tr>
            <th className="border-b-2 px-10 font-semibold">Nome do Serviço</th>
            <th className="border-b-2 px-10 font-semibold">Preço</th>
            
          </tr>
        </thead>
        <tbody className="text-center">
          {servicos.map(servico => (
            <tr className="h-24" key={servico.id}>
              <td className="border-b-2 px-10 font-semibold">{servico.name}</td>
              <td className="border-b-2 px-10">{servico.price}</td>
              <td className="flex-1 border-b-2 h-24  max-md:flex-col p-1">
                <button className="border rounded bg-azul-500 text-white">Editar</button>
                <button className="border rounded bg-azul-500 text-white">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
