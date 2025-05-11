import React, { useState, Children } from 'react';
import { CalendarIcon, UsersIcon, CreditCardIcon, CheckIcon } from 'lucide-react';
import Button from '../components/UI/Button';
const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: 'deluxe',
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle booking submission
      alert('Booking confirmed! A confirmation email has been sent to your inbox.');
      // Reset form or redirect
    }
  };
  const roomTypes = [{
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 299,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 'executive',
    name: 'Executive Suite',
    price: 499,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 999,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 'family',
    name: 'Family Suite',
    price: 599,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }];
  const renderStepIndicator = () => {
    return <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <CalendarIcon className="h-5 w-5" />
          </div>
          <div className={`h-1 w-12 ${step >= 2 ? 'bg-blue-900' : 'bg-gray-200'}`}></div>
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <UsersIcon className="h-5 w-5" />
          </div>
          <div className={`h-1 w-12 ${step >= 3 ? 'bg-blue-900' : 'bg-gray-200'}`}></div>
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 3 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
            <CreditCardIcon className="h-5 w-5" />
          </div>
        </div>
      </div>;
  };
  const renderStep1 = () => {
    return <div>
        <h3 className="text-xl font-medium text-blue-900 mb-6">
          Select Dates & Room
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
              Check-in Date
            </label>
            <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
              Check-out Date
            </label>
            <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
              Adults
            </label>
            <select id="adults" name="adults" value={formData.adults} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>
                  {num}
                </option>)}
            </select>
          </div>
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
              Children
            </label>
            <select id="children" name="children" value={formData.children} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>
                  {num}
                </option>)}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Room Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roomTypes.map(room => <label key={room.id} className={`border rounded-lg p-4 flex cursor-pointer transition-colors ${formData.roomType === room.id ? 'border-blue-900 bg-blue-50' : 'border-gray-200'}`}>
                <input type="radio" name="roomType" value={room.id} checked={formData.roomType === room.id} onChange={handleChange} className="sr-only" />
                <div className="flex-shrink-0 mr-4">
                  <img src={room.image} alt={room.name} className="w-20 h-20 object-cover rounded" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-blue-900">{room.name}</h4>
                  <p className="text-gray-600 text-sm">
                    ${room.price} per night
                  </p>
                </div>
                {formData.roomType === room.id && <div className="flex items-center ml-2">
                    <CheckIcon className="h-5 w-5 text-blue-900" />
                  </div>}
              </label>)}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests
          </label>
          <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any special requests or preferences?"></textarea>
        </div>
      </div>;
  };
  const renderStep2 = () => {
    return <div>
        <h3 className="text-xl font-medium text-blue-900 mb-6">
          Guest Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>
      </div>;
  };
  const renderStep3 = () => {
    return <div>
        <h3 className="text-xl font-medium text-blue-900 mb-6">
          Payment Information
        </h3>
        <div className="mb-6">
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
            Name on Card
          </label>
          <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="XXXX XXXX XXXX XXXX" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-blue-900 mb-2">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Check-in:</span>
              <span className="font-medium">
                {formData.checkIn || 'Not selected'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Check-out:</span>
              <span className="font-medium">
                {formData.checkOut || 'Not selected'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Guests:</span>
              <span className="font-medium">
                {formData.adults} Adults, {formData.children} Children
              </span>
            </div>
            <div className="flex justify-between">
              <span>Room Type:</span>
              <span className="font-medium">
                {roomTypes.find(room => room.id === formData.roomType)?.name || 'Not selected'}
              </span>
            </div>
            <div className="border-t border-blue-200 my-2 pt-2 flex justify-between font-medium">
              <span>Total:</span>
              <span>
                $
                {roomTypes.find(room => room.id === formData.roomType)?.price || 0}{' '}
                per night
              </span>
            </div>
          </div>
        </div>
      </div>;
  };
  return <div className="bg-gray-50 py-12 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-blue-900">
            Book Your Stay
          </h1>
          <p className="text-gray-600 mt-2">
            Complete the form below to reserve your room
          </p>
        </div>
        {renderStepIndicator()}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            <div className="mt-8 flex justify-between">
              {step > 1 ? <Button variant="outline" onClick={() => setStep(step - 1)} type="button">
                  Back
                </Button> : <div></div>}
              <Button variant={step === 3 ? 'secondary' : 'primary'} type="submit">
                {step === 3 ? 'Confirm Booking' : 'Continue'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default Booking;