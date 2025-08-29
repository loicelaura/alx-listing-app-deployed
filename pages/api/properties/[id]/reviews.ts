import type { NextApiRequest, NextApiResponse } from "next";

// Define an interface for the review data for better type safety
interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// A mock database of reviews, keyed by property ID
const reviewsDb: { [key: string]: Review[] } = {
  "1": [
    {
      id: "rev1",
      author: "Jane Doe",
      rating: 5,
      comment: "Absolutely stunning! The place was clean and the location was perfect.",
      date: "2024-07-15",
    },
    {
      id: "rev2",
      author: "John Smith",
      rating: 4,
      comment: "A lovely spot for a weekend getaway. The host was very responsive.",
      date: "2024-07-20",
    },
  ],
  "2": [
    {
      id: "rev3",
      author: "Alice Johnson",
      rating: 5,
      comment: "The best beach house I've ever stayed in. Highly recommend!",
      date: "2024-08-01",
    },
    {
      id: "rev4",
      author: "Bob Williams",
      rating: 4,
      comment: "Great location, but the Wi-Fi was a bit spotty.",
      date: "2024-08-05",
    },
  ],
  "3": [
    {
      id: "rev5",
      author: "Carlos Rodriguez",
      rating: 5,
      comment: "Modern and comfortable. Exactly as advertised.",
      date: "2024-08-10",
    },
    {
      id: "rev6",
      author: "Emily Chen",
      rating: 3,
      comment: "The apartment was clean, but the street was a bit noisy at night.",
      date: "2024-08-12",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the property ID from the dynamic route
  const { id } = req.query;

  // Find the reviews for the given property ID
  const propertyReviews = reviewsDb[id as string];

  if (req.method === "GET") {
    if (propertyReviews) {
      // If reviews are found, return them with a 200 OK status
      res.status(200).json(propertyReviews);
    } else {
      // If no reviews are found for the ID, return an empty array and 200 OK
      // This is a common practice for "not found" data
      res.status(200).json([]);
    }
  } else {
    // If the method is not GET, return a 405 Method Not Allowed error
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
