import axios from "axios";
import { useState, useEffect } from "react";

// Define a type for the review data,
// based on the data provided by your API route.
interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// Define the props that the ReviewSection component expects to receive.
interface ReviewSectionProps {
  propertyId: string | string[]; // propertyId can be a string or an array of strings
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  // Explicitly tell useState that the array will contain Review objects.
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      // Ensure propertyId is a string before making the API call
      if (Array.isArray(propertyId)) return;

      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to fetch reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-md font-semibold text-gray-800">{review.author}</h4>
            <span className="text-sm font-bold text-yellow-500">{review.rating} / 5</span>
          </div>
          {/* Escape quotes properly */}
          <p className="text-gray-600 italic">&quot;{review.comment}&quot;</p>
          <p className="text-xs text-gray-400 mt-2 text-right">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
