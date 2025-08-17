

const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
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
            className="border p-2 w-full mt-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
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
          className="border p-2 w-full mt-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium">
            Expiration Date
          </label>
          <input
            id="expiry"
            name="expiry"
            type="text"
            placeholder="MM/YY"
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
            className="border p-2 w-full mt-2"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
