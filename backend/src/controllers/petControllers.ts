import { Prisma } from '@prisma/client';
import prisma from '../dbConnector';
import { Response, Request } from 'express';




class PetControllers {

    public createPet = async (req: Request, res: Response) => {
        const { name, type, breed, clientId } = req.body;
        console.log(req.body)
        try {
          // Check if client exists
          const existingClient = await prisma.client.findUnique({
            where: { id: Number(clientId) },
          });
      
          if (!existingClient) {
              res.status(404).json({ error: 'Client not found' });
            return 
          }
      
          const newPet = await prisma.pet.create({
            data: {
              name,
              type,
              breed,
              clientId: Number(clientId),
            },
          });
      
          res.status(201).json(newPet);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating pet' });
        }
      };
      

      public getAllPets = async (req: Request, res: Response) => {
        const { page = 1, pageSize = 10, search = '' } = req.query;
      
        try {
          const skip = (Number(page) - 1) * Number(pageSize);
          const take = Number(pageSize);
      
          const pets = await prisma.pet.findMany({
            skip,
            take,
            where: {
              OR: [
                { name: { contains: search as string } },
                { type: { contains: search as string } },
                { breed: { contains: search as string } },
              ],
            },
            include: {
              client: true, // Include owner details
            },
          });
      
          const totalPets = await prisma.pet.count({
            where: {
              OR: [
                { name: { contains: search as string } },
                { type: { contains: search as string } },
                { breed: { contains: search as string } },
              ],
            },
          });
      
          res.status(200).json({
            pets,
            total: totalPets,
            page: Number(page),
            pageSize: Number(pageSize),
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving pets' });
        }
      };

      public updatePet = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, type, breed,clientId } = req.body;
      
        try {
          // Check if pet exists
          const existingPet = await prisma.pet.findUnique({
            where: { id: Number(id) },
          });
      
          if (!existingPet) {
              res.status(404).json({ error: 'Pet not found' });
            return 
          }
      
          const updatedPet = await prisma.pet.update({
            where: { id: Number(id) },
            data: {
              name: name || existingPet.name,
              type: type || existingPet.type,
              breed: breed !== undefined ? breed : existingPet.breed,
              
              clientId: Number(clientId) || existingPet.clientId,
            },
          });
      
          res.status(200).json(updatedPet);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error updating pet' });
        }
      };
    
      public deletePet = async (req: Request, res: Response) => {
        const { id } = req.params;
      
        try {
          // Check if pet exists
          const existingPet = await prisma.pet.findUnique({
            where: { id: Number(id) },
          });
      
          if (!existingPet) {
              res.status(404).json({ error: 'Pet not found' });
            return
          }
      
          await prisma.pet.delete({
            where: { id: Number(id) },
          });
      
          res.status(204).send();
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error deleting pet' });
        }
      };
    
      public getPetById = async (req: Request, res: Response) => {
        const { id } = req.params;
      
        try {
          const pet = await prisma.pet.findUnique({
            where: { id: Number(id) },
            include: {
              client: true, // Include owner details
            },
          });
      
          if (!pet) {
              res.status(404).json({ error: 'Pet not found' });
            return
          }
      
          res.status(200).json(pet);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving pet' });
        }
      };
      

}


export const petController = new PetControllers();
