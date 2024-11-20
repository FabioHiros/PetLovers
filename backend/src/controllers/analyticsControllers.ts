import { Request, Response } from 'express';
import prisma from '../dbConnector';

export class AnalyticsController {
  // Get top 5 clients by number of products purchased
  public static getTopClientsByProducts = async (req: Request, res: Response) => {
    try {
      const topClients = await prisma.client.findMany({
        include: {
          _count: {
            select: { Purchase: true },
          },
        },
        orderBy: {
          Purchase: {
            _count: 'desc',
          },
        },
        take: 5,
      });

      res.status(200).json(topClients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving top clients by products' });
    }
  };

  // Get top 5 clients by total spending
  public static getTopClientsBySpending = async (req: Request, res: Response) => {
    try {
      const topSpenders = await prisma.purchase.groupBy({
        by: ['clientId'],
        _sum: { totalPrice: true },
        orderBy: { _sum: { totalPrice: 'desc' } },
        take: 5,
      });

      const result = await Promise.all(
        topSpenders.map(async (spender) => ({
          client: await prisma.client.findUnique({ where: { id: spender.clientId } }),
          totalSpent: spender._sum.totalPrice,
        }))
      );

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving top clients by spending' });
    }
  };

  // Get most popular products
  public static getMostPopularProducts = async (req: Request, res: Response) => {
    try {
      const popularProducts = await prisma.purchase.groupBy({
        by: ['itemId'],
        _sum: { quantity: true },
        where: { type: 'PRODUCT' },
        orderBy: { _sum: { quantity: 'desc' } },
        take: 5,
      });

      const result = await Promise.all(
        popularProducts.map(async (product) => ({
          product: await prisma.product.findUnique({ where: { id: product.itemId } }),
          totalPurchased: product._sum.quantity,
        }))
      );

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving popular products' });
    }
  };

  // Get most popular services
  public static getMostPopularServices = async (req: Request, res: Response) => {
    try {
      const popularServices = await prisma.purchase.groupBy({
        by: ['itemId'],
        _sum: { quantity: true },
        where: { type: 'SERVICE' },
        orderBy: { _sum: { quantity: 'desc' } },
        take: 5,
      });

      const result = await Promise.all(
        popularServices.map(async (service) => ({
          service: await prisma.service.findUnique({ where: { id: service.itemId } }),
          totalPurchased: service._sum.quantity,
        }))
      );

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving popular services' });
    }
  };

  // Get most popular products/services by pet type and breed
  public static getPopularItemsByPetTypeAndBreed = async (req: Request, res: Response) => {
    try {
      const popularItems = await prisma.purchase.groupBy({
        by: ['itemId', 'type', 'petId'],
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: 'desc' } },
      });

      const result = await Promise.all(
        popularItems.map(async (item) => {
          const pet = await prisma.pet.findUnique({ where: { id: item.petId } });
          const productOrService =
            item.type === 'PRODUCT'
              ? await prisma.product.findUnique({ where: { id: item.itemId } })
              : await prisma.service.findUnique({ where: { id: item.itemId } });

          return {
            type: item.type,
            item: productOrService,
            petType: pet?.type,
            petBreed: pet?.breed,
            totalPurchased: item._sum.quantity,
          };
        })
      );

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving popular items by pet type and breed' });
    }
  };
}
