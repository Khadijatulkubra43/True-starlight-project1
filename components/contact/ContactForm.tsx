'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-8">Send Us a Message</h2>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm pr-8"
          >
            <option value="">Select a subject</option>
            <option value="course-inquiry">Course Inquiry</option>
            <option value="technical-support">Technical Support</option>
            <option value="billing">Billing Questions</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="general">General Questions</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm resize-vertical"
            placeholder="Tell us how we can help you..."
          ></textarea>
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500}
          className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  );
}