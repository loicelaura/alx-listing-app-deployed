export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Luxury Downtown Loft",
    location: "Nairobi, Kenya",
    price: 150,
    image: "https://placehold.co/600x400/211244/white?text=Loft",
  },
  {
    id: "2",
    name: "Cozy Beach House",
    location: "Mombasa, Kenya",
    price: 90,
    image: "https://placehold.co/600x400/906a2e/white?text=Beach",
  },
  {
    id: "3",
    name: "Modern City Apartment",
    location: "Nairobi, Kenya",
    price: 120,
    image: "https://placehold.co/600x400/984832/white?text=Apartment",
  },
  {
    id: "4",
    name: "Rustic Mountain Cabin",
    location: "Naivasha, Kenya",
    price: 75,
    image: "https://placehold.co/600x400/0f3e2b/white?text=Cabin",
  },
  {
    id: "5",
    name: "Serene Lakeside Villa",
    location: "Kisumu, Kenya",
    price: 210,
    image: "https://placehold.co/600x400/017374/white?text=Villa",
  },
  {
    id: "6",
    name: "Spacious Safari Lodge",
    location: "Maasai Mara, Kenya",
    price: 350,
    image: "https://placehold.co/600x400/524330/white?text=Lodge",
  },
];