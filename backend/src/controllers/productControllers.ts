// import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../dbConnector';
export class ProductController {
  // Create a Product
  public static createProduct = async (req: Request, res: Response) => {
    const { name, description, price } = req.body;

    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price: Number(price),
        },
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating product' });
    }
  };

  // Get All Products
  public static getProducts = async (req: Request, res: Response) => {
    const { search, page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    try {
      const products = await prisma.product.findMany({
        where: search ? { name: { contains: String(search) } } : undefined,
        skip,
        take: Number(limit),
      });

      const totalProducts = await prisma.product.count();

      res.status(200).json({
        products,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(totalProducts / Number(limit)),
          totalProducts,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving products' });
    }
  };

  // Get a Product by ID
  public static getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
      });

      if (!product) {
          res.status(404).json({ error: 'Product not found' });
        return
      }

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving product' });
    }
  };

  // Update a Product
  public static updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
      const updatedProduct = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          price: price !== undefined ? Number(price) : undefined,
        },
      });

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating product' });
    }
  };

  // Delete a Product
  public static deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await prisma.product.delete({
        where: { id: Number(id) },
      });

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting product' });
    }
  };
}
