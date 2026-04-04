import React, { useState, useRef } from 'react';

const BookingForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    event: '',
    eventDate: '',
    attendees: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, event, eventDate, attendees } = formData;

    if (!fullName || !email || !phone || !event || !eventDate || !attendees) {
      setStatus('Please fill out all required fields.');
      setStatusType('error');
      return;
    }

    if (!isValidPhone(phone)) {
      setStatus('Please enter a valid phone number (10 to 15 digits).');
      setStatusType('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending...');
    setStatusType('info');

    // Prepare payload for backend

    // Send booking to backend
    (async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || '';
        const res = await fetch(`${apiBase}/api/forms/booking`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            event: formData.event,
            eventDate: formData.eventDate,
            attendees: formData.attendees,
            message: formData.message,
          }),
        });
        if (!res.ok) throw new Error(`Server ${res.status}`);

        setStatus('Your ticket booking has been successfully submitted!');
        setStatusType('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          event: '',
          eventDate: '',
          attendees: '',
          message: '',
        });
        form.current.reset();
      } catch (error) {
        console.error('Booking submit error:', error);
        setStatus('Failed to send booking. Please try again.');
        setStatusType('error');
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
        {status && (
            <div className={`mt-3 alert ${statusType === 'success' ? 'alert-success' : statusType === 'info' ? 'alert-info' : 'alert-danger'}`}>
                {status}
            </div>
        )}
      <div className="name-email">
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="fullName" className="mb-2">Full Name:</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              name="fullName" 
              id="fullName" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.fullName} 
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="email" className="mb-2">Email:</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              name="email" 
              id="email" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.email} 
            />
          </div>
        </div>
      </div>

      <div className="phone-address">
        <div className="row justify-content-around">
          <div className="col-lg-6 col-md-6">
            <label htmlFor="phone" className="mb-2">Phone No:</label>
            <input 
              type="tel" 
              placeholder="Phone No." 
              name="phone" 
              id="phone" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.phone} 
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <label htmlFor="address" className="mb-2">Address:</label>
            <input 
              type="text" 
              placeholder="Address" 
              name="address" 
              id="address" 
              className="py-4 mb-4" 
              onChange={handleChange}
              value={formData.address} 
            />
          </div>
        </div>
      </div>

      <div className="event-date-textarea">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <label htmlFor="event" className="mb-2">Events:</label>
            <select 
              name="event" 
              id="event" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.event}
            >
              <option value="">--Please choose a preferred event--</option>
              <option value="Event-1">Event-1</option>
              <option value="Event-2">Event-2</option>
              <option value="Event-3">Event-3</option>
              <option value="Event-4">Event-4</option>
            </select>

            <label htmlFor="eventDate" className="mb-2">Event Date:</label>
            <input 
              type="date" 
              name="eventDate" 
              id="eventDate" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.eventDate} 
            />

            <label htmlFor="attendees" className="mb-2">No of Attendee:</label>
            <select 
              name="attendees" 
              id="attendees" 
              className="py-4 mb-4" 
              required 
              onChange={handleChange}
              value={formData.attendees}
            >
              <option value="">--Please select number of attendees--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-lg-6 col-md-6">
            <label htmlFor="message" className="mb-2">Message:</label>
            <textarea 
              placeholder="Any message you want to add?" 
              className="py-4" 
              rows="10" 
              name="message" 
              id="message" 
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
        </div>
      </div>

      <button 
        className="btn" 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Book Now'}
      </button>

    </form>
  );
};

export default BookingForm;
