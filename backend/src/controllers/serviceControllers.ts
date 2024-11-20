// import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../dbConnector';


export class ServiceController {
    public static createService = async (req: Request, res: Response) => {
      const { name, description, price, duration } = req.body;
  
      try {
        const newService = await prisma.service.create({
          data: {
            name,
            description,
            price: Number(price),
          },
        });
  
        res.status(201).json(newService);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating service' });
      }
    };
  
    public static getServices = async (req: Request, res: Response) => {
      const { search, page = 1, limit = 10 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
  
      try {
        const services = await prisma.service.findMany({
          where: search ? { name: { contains: String(search) } } : undefined,
          skip,
          take: Number(limit),
        });
  
        const totalServices = await prisma.service.count();
  
        res.status(200).json({
          services,
          pagination: {
            currentPage: Number(page),
            totalPages: Math.ceil(totalServices / Number(limit)),
            totalServices,
          },
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving services' });
      }
    };
  
    public static getServiceById = async (req: Request, res: Response) => {
      const { id } = req.params;
  
      try {
        const service = await prisma.service.findUnique({
          where: { id: Number(id) },
        });
  
        if (!service) {
            res.status(404).json({ error: 'Service not found' });
          return 
        }
  
        res.status(200).json(service);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving service' });
      }
    };
  
    public static updateService = async (req: Request, res: Response) => {
      const { id } = req.params;
      const { name, description, price, duration } = req.body;
  
      try {
        const updatedService = await prisma.service.update({
          where: { id: Number(id) },
          data: {
            name,
            description,
            price: price !== undefined ? Number(price) : undefined,
          },
        });
  
        res.status(200).json(updatedService);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating service' });
      }
    };
  
    public static deleteService = async (req: Request, res: Response) => {
      const { id } = req.params;
  
      try {
        await prisma.service.delete({
          where: { id: Number(id) },
        });
  
        res.status(204).send();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting service' });
      }
    };
  }
  