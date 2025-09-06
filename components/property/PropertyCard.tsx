import Link from "next/link";
import Image from "next/image";
import { Property } from "@/interfaces/property"; // Assuming this is where your interface is defined

// Define the props for the component
interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Property Image */}
      <div className="relative w-full h-48">
        <Image
          src={property.image}
          alt={property.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4">
        {/* Property Name as a Link */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors">
            {property.name}
          </h3>
        </Link>

        {/* Property Location */}
        <p className="text-gray-600 mt-1">{property.location}</p>

        {/* Property Price */}
        <p className="text-xl font-bold text-gray-900 mt-2">
          ${property.price}
        </p>

      
      </div>
    </div>
  );
};


export default PropertyCard;