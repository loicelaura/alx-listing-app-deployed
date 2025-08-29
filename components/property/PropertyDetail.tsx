import { Property,  } from "@/interfaces/property";
import Image from "next/image";

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {property.name}
        </h1>

        {/* Property Image */}
        <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
          <Image
           src={property.image} 
           alt={property.name}
           layout="fill"
           objectFit="cover"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Location</h2>
            <p className="text-gray-600">{property.location}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Price</h2>
            <p className="text-2xl font-bold text-gray-900">${property.price}</p>
          </div>

        </div>

    </div>
  );
};

export default PropertyDetail;