import { Prisma } from '@prisma/client';
import prisma from '../dbConnector';
import { Response, Request } from 'express';

class ClientControllers {
  public createClient = async (req: Request, res: Response) => {
    const { name, nomeSocial, email, cpf, rg, telefones, endereco } = req.body;
    console.log(req.body);
    try {
      // Check if the email is already in use
      const existingEmail = await prisma.client.findUnique({
        where: {
          email: email,
        },
      });
  
      if (existingEmail) {
        res.status(400).json({ error: "Email already in use" });
        return;
      }
  
      // Check if the CPF is already in use
      const existingCpf = await prisma.client.findUnique({
        where: {
          cpf: cpf,
        },
      });
  
      if (existingCpf) {
        res.status(400).json({ error: "CPF already in use" });
        return;
      }
 
      const telefonesData = Array.isArray(telefones)
        ? telefones.map((telefone: { ddd: string; numero: string }) => ({
            ddd: telefone.ddd,
            numero: telefone.numero,
          }))
        : [];
  
      // Create the client
      const newClient = await prisma.client.create({
        data: {
          name: name,
          nomeSocial,
          email,
          cpf,
          rg,
          phones: {
            create: telefonesData,
          },
          endereco: {
            create: {
              estado: endereco.estado,
              cidade: endereco.cidade,
              bairro: endereco.bairro,
              rua: endereco.rua,
              numero: endereco.numero,
              codigoPostal: endereco.codigoPostal,
              informacoesAdicionais: endereco.informacoesAdicionais || null,
            },
          },
        },
        include: {
          phones: true,
          endereco: true,
        },
      });
  
      res.status(201).json(newClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating client" });
    }
  };



      public getClients = async (req: Request, res: Response) => {
        const { search, page = 1, limit = 10 } = req.query;
        
        const searchQuery = search ? (search as string) : '';
        const skip = (Number(page) - 1) * Number(limit);  // Skip for pagination
        
        try {
          const clients = await prisma.client.findMany({
            where: {
              name: {
                contains: searchQuery, 
              },
            },
            skip,
            take: Number(limit),  // Limit the number of results returned
            include: {
              phones: true,
              pets: true,
              endereco: true,
            },
          });
          
          // Get total count for pagination info
          const totalClients = await prisma.client.count({
            where: {
              name: {
                contains: searchQuery,
             
              },
            },
          });
      
          res.status(200).json({
            clients,
            pagination: {
              currentPage: Number(page),
              totalPages: Math.ceil(totalClients / Number(limit)),
              totalClients,
            },
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving clients' });
        }
      };
      

      public updateClient = async (req: Request, res: Response) => {
        const { id } = req.params;
        console.log(req.params); // Debugging log
        const { name, email, cpf, phones, rg,endereco } = req.body;
        console.log(req.body)
        try {
          // Check if the client exists
          const existingClient = await prisma.client.findUnique({
            where: { id: Number(id) },
          });
      
          if (!existingClient) {
            res.status(404).json({ error: 'Client not found' });
            return;
          }
      
          // Build the data object dynamically
          const dataToUpdate: Prisma.ClientUpdateInput = {};
      
          if (name) dataToUpdate.name = name;
          if (email) dataToUpdate.email = email;
          if (cpf) dataToUpdate.cpf = cpf;
          if (rg) dataToUpdate.rg = rg; // If RG is provided
      
          if (phones) {
            dataToUpdate.phones = {
              deleteMany: {}, // Delete existing phones (if you want to remove all previous ones)
              create: phones.map((phone: { ddd: string, numero: string }) => ({
                ddd: phone.ddd,  // Ensure ddd (area code) is provided
                numero: phone.numero,  // Ensure number is provided
              })),
            };
          }
          if (endereco) {
            // Since endereco is not an array, we directly use the object
            dataToUpdate.endereco = {
                update: {
                    rua: endereco.rua,
                    numero: endereco.numero,
                    estado: endereco.estado,
                    codigoPostal: endereco.codigoPostal,
                    bairro: endereco.bairro,
                    cidade: endereco.cidade,
                },
            };
        }
      
          // Update the client
          const updatedClient = await prisma.client.update({
            where: { id: Number(id) },
            data: dataToUpdate,
            include: {
              phones: true, // Include phones in the updated client data
              endereco: true, // Include phones in the updated client data
            },
          });
      
          res.status(200).json(updatedClient);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error updating client' });
        }
      };


      public deleteClient = async (req: Request, res: Response) => {
        const { id } = req.params;
      
        try {
          // Check if the client exists
          const existingClient = await prisma.client.findUnique({
            where: { id: Number(id) },
          });
      
          if (!existingClient) {
            res.status(404).json({ error: 'Client not found' });
            return
          }
      
          // Delete the client
          await prisma.client.delete({
            where: { id: Number(id) },
          });
      
          res.status(200).json({ message: 'Client deleted successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error deleting client' });
        }
      };
      
      public getClientById = async (req: Request, res: Response) => {
        const { id } = req.params; // Get the client ID from the URL parameter
      
        try {
          // Fetch the client by ID
          const client = await prisma.client.findUnique({
            where: { id: parseInt(id) }, // Ensure the ID is treated as an integer
            include: {
              phones: true, // Include related phones if needed
              endereco: true, // Include related address if needed
              pets:true
            },
          });
      
          if (!client) {
            res.status(404).json({ error: "Client not found" });
            return 
          }
      
          res.status(200).json(client); // Return the client data
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error fetching client" });
        }
      };
      
}

export const ClientController = new ClientControllers();
