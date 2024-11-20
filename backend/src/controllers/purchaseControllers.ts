import { Request, Response } from "express";
import prisma from "../dbConnector";

export const purchaseController = {
  async createPurchase(req: Request, res: Response) {
    const { clientId, petId, itemId, quantity, type } = req.body;

    try {
      // Validate input
      if (!clientId || !petId || !itemId || !quantity || !type || quantity <= 0) {
          res.status(400).json({ error: "Invalid input" });
        return
      }

      // Check if the type is valid
      if (!["PRODUCT", "SERVICE"].includes(type)) {
          res.status(400).json({ error: "Invalid purchase type" });
        return
      }

      // Fetch the item (product or service) and calculate the total price
      const item =
        type === "PRODUCT"
          ? await prisma.product.findUnique({ where: { id: itemId } })
          : await prisma.service.findUnique({ where: { id: itemId } });

      if (!item) {
          res.status(404).json({ error: `${type} not found` });
        return 
      }

      const totalPrice = item.price * quantity;

      // Create purchase
      const purchase = await prisma.purchase.create({
        data: {
          clientId,
          petId,
          itemId,
          quantity,
          totalPrice,
          type,
        },
      });

      res.status(201).json(purchase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating purchase" });
    }
  },

  async getPurchases(req: Request, res: Response) {
    try {
      const purchases = await prisma.purchase.findMany({
        include: {
          client: true,
          pet: true,
        },
      });

      res.status(200).json(purchases);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching purchases" });
    }
  },

  async getPurchaseById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const purchase = await prisma.purchase.findUnique({
        where: { id: Number(id) },
        include: {
          client: true,
          pet: true,
        },
      });

      if (!purchase) {
          res.status(404).json({ error: "Purchase not found" });
        return 
      }

      res.status(200).json(purchase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching purchase" });
    }
  },

  async deletePurchase(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const purchase = await prisma.purchase.delete({
        where: { id: Number(id) },
      });

      res.status(200).json({ message: "Purchase deleted", purchase });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting purchase" });
    }
  },
};
