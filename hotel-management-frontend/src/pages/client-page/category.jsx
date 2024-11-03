import React from 'react';

export default function CategoryPage() {
  const categories = [
    {
      categoryId: 1,
      name: "Deluxe Room",
      price: 150,
      features: ["King-sized bed", "Ocean view", "Free breakfast"],
      description: "A luxurious room with stunning views and premium amenities.",
      image: "deluxe_room.jpg",
    },
    {
      categoryId: 2,
      name: "Standard Room",
      price: 100,
      features: ["Queen-sized bed", "City view", "Complimentary Wi-Fi"],
      description: "A comfortable room ideal for business travelers.",
      image: "standard_room.jpg",
    },
    {
      categoryId: 3,
      name: "Suite",
      price: 250,
      features: ["Separate living area", "Mini bar", "Spa access"],
      description: "An expansive suite for those seeking extra comfort.",
      image: "suite.jpg",
    },
  ];

  return (
    <div className="w-full">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th className="px-4 py-2">Category ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Features</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((category) => (
              <tr key={category.categoryId}>
                <td>{category.categoryId}</td>
                <td>{category.name}</td>
                <td>${category.price}</td>
                <td>{category.features.join(", ")}</td>
                <td>{category.description}</td>
                <td>
                  <img src={category.image} alt={category.name} className="h-16 w-16" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
