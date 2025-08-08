'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      description: 'Get in touch via email',
      contact: 'hello@truestarlight.com',
      action: 'mailto:hello@truestarlight.com'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 9 AM - 6 PM EST',
      action: '#'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    }
  ];

  const faqs = [
    {
      question: "How do I access my courses after purchase?",
      answer: "Once you complete your purchase, you'll receive immediate access to your course dashboard with all materials available for download."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll provide a full refund, no questions asked."
    },
    {
      question: "Are the courses suitable for complete beginners?",
      answer: "Absolutely! Our courses are designed specifically for adult learners, including complete beginners. We start with the fundamentals and progress at a comfortable pace."
    },
    {
      question: "How long do I have access to the courses?",
      answer: "You get lifetime access to all purchased courses, including any future updates or additional materials we add."
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-8">Other Ways to Reach Us</h2>
      
      <div className="space-y-6 mb-12">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <i className={`${method.icon} text-xl text-white`}></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black mb-1">{method.title}</h3>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <a 
                href={method.action}
                className="text-black font-medium hover:text-gray-700 transition-colors cursor-pointer"
              >
                {method.contact}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <h4 className="text-lg font-semibold text-black mb-3">{faq.question}</h4>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-black text-white rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to Start Learning?</h3>
        <p className="text-gray-300 mb-4">
          Join thousands of students who have achieved victory in web design
        </p>
        <a 
          href="/products" 
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block"
        >
          View Courses
        </a>
      </div>
    </div>
  );
}