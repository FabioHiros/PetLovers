import React from "react";
import { useMostPopularProducts } from "../../Hooks/DashBoard/useMostPopularProducts";
import { useMostPopularServices } from "../../Hooks/DashBoard/useMostPopularServices";
import { usePopularItemsByPetTypeAndBreed } from "../../Hooks/DashBoard/usePopularItemsByPetTypeAndBreed";
import { useTopClientsByProducts } from "../../Hooks/DashBoard/useTopClientsByProducts";
import { useTopClientsBySpending } from "../../Hooks/DashBoard/useTopClientsBySpending";
import AnalyticsTable from "./Analytics";

// Formatting functions for different datasets
const formatTopClientsByQuantity = (data: any[]) => {
  return data.map((client) => ({
    id: client.id,
    name: client.name,
    email: client.email,
    purchaseCount: client._count.Purchase,
  }));
};

const formatTopClientsBySpending = (data: any[]) => {
  return data.map((client) => ({
    id: client.client.id,
    name: client.client.name,
    totalSpent: client.totalSpent && !isNaN(client.totalSpent) ? `R$ ${client.totalSpent.toFixed(2)}` : "N/A", // Check if totalSpent is valid
  }));
};

const formatMostPopularProducts = (data: any[]) => {
  return data.map((product) => ({
    name: product.product.name,
    description: product.product.description,
    price: product.product.price ? `R$ ${product.product.price.toFixed(2)}` : "N/A", // Check if price is valid
    totalPurchased: product.totalPurchased,
  }));
};


const formatMostPopularServices = (data: any[]) => {
  console.log(data)
  return data.map((service) => ({
    name: service.service.name,
    description: service.service.description,
    price: service.service.price ? `R$ ${service.service.price.toFixed(2)}` : "N/A", // Check if price is valid
    totalPurchased: service.totalPurchased,
  }));
};

const formatPopularItemsByPetType = (data: any[]) => {
  return data.map((item) => ({
    type: item.type,
    itemName: item.item.name,
    petType: item.petType,
    petBreed: item.petBreed,
    totalPurchased: item.totalPurchased,
  }));
};

const Dashboard: React.FC = () => {
  const { data: topClientsByProducts, isLoading: loadingProducts, isError: errorProducts } = useTopClientsByProducts();
  const { data: topClientsBySpending, isLoading: loadingSpending, isError: errorSpending } = useTopClientsBySpending();
  const { data: mostPopularProducts, isLoading: loadingProductsList, isError: errorProductsList } = useMostPopularProducts();
  const { data: mostPopularServices, isLoading: loadingServices, isError: errorServices } = useMostPopularServices();
  const { data: popularItemsByPetTypeAndBreed, isLoading: loadingPets, isError: errorPets } = usePopularItemsByPetTypeAndBreed();

  if (loadingProducts || loadingSpending || loadingProductsList || loadingServices || loadingPets) {
    return <div>Loading...</div>;
  }

  if (errorProducts || errorSpending || errorProductsList || errorServices || errorPets) {
    return <div>Error loading data.</div>;
  }

  const formattedTopClientsByProducts = formatTopClientsByQuantity(topClientsByProducts);
  const formattedTopClientsBySpending = formatTopClientsBySpending(topClientsBySpending);
  const formattedMostPopularProducts = formatMostPopularProducts(mostPopularProducts);
  const formattedMostPopularServices = formatMostPopularServices(mostPopularServices);
  const formattedPopularItemsByPetType = formatPopularItemsByPetType(popularItemsByPetTypeAndBreed);

  return (
    <div className="container mx-auto mt-5">
      <AnalyticsTable
        title="Top Clients by Number of Products Purchased"
        data={formattedTopClientsByProducts || []}
      />
      <AnalyticsTable
        title="Top Clients by Total Spending"
        data={formattedTopClientsBySpending || []}
      />
      <AnalyticsTable
        title="Most Popular Products"
        data={formattedMostPopularProducts || []}
      />
      <AnalyticsTable
        title="Most Popular Services"
        data={formattedMostPopularServices || []}
      />
      <AnalyticsTable
        title="Most Popular Items by Pet Type and Breed"
        data={formattedPopularItemsByPetType || []}
      />
    </div>
  );
};

export default Dashboard;
