import { Property } from "@/interfaces/property";
import Link from "next/link";
import Image from "next/image";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Property Image */}
      <Image
        src={property.image}
        alt={property.name}
        width={400} 
        height={300} 
        className="w-full h-48 object-cover"
      />

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

