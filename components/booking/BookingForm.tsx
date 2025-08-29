import axios from "axios";
import { useState } from "react";
import { BookingDetails } from "@/interfaces/booking";

// We'll define an interface for the form data to ensure type safety.
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface BookingFormProps {
  bookingDetails: BookingDetails;
}

export default function BookingForm({ bookingDetails }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Form validation check
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "cardNumber",
      "expirationDate",
      "cvv",
      "street",
      "city",
      "zip",
      "country",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        setError("Please fill out all required fields.");
        setLoading(false);
        return;
      }
    }

    try {
      // Combine the form data with the booking details
      const payload = {
        ...formData,
        ...bookingDetails,
      };

      const response = await axios.post("/api/bookings", payload);
      setSuccess(response.data.message);
      // Clear the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium">
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium">
              Expiration Date
            </label>
            <input
              id="expirationDate"
              name="expirationDate"
              type="text"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium">
              CVV
            </label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label htmlFor="street" className="block text-sm font-medium">
            Street Address
          </label>
          <input
            id="street"
            name="street"
            type="text"
            placeholder="123 Main St"
            value={formData.street}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="zip" className="block text-sm font-medium">
              Zip Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              placeholder="12345"
              value={formData.zip}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="Enter country"
              value={formData.country}
              onChange={handleChange}
              className="border p-2 w-full mt-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {success && <p className="mt-4 text-center text-green-600 font-medium">{success}</p>}
        {error && <p className="mt-4 text-center text-red-600 font-medium">{error}</p>}
      </form>
    </div>
  );
}
