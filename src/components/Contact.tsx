import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/sejalsatav2001@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#03A9F4]">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-[#F7F7F7]">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#03A9F4]" />
                <a href="mailto:sejalsatav2001@gmail.com" className="text-[#F7F7F7] hover:text-[#03A9F4] transition-colors">
                  sejalsatav2001@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#03A9F4]" />
                <a href="tel:+16175551234" className="text-[#F7F7F7] hover:text-[#03A9F4] transition-colors">
                  +1 (617) 555-1234
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#03A9F4]" />
                <span className="text-[#F7F7F7]">Boston, Massachusetts, USA</span>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <h4 className="text-xl font-semibold text-[#F7F7F7]">Connect with me</h4>
              <div className="flex space-x-6">
                <a href="https://linkedin.com/in/sejalsatav" target="_blank" rel="noopener noreferrer" 
                   className="text-[#F7F7F7] hover:text-[#03A9F4] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/sejalsatav" target="_blank" rel="noopener noreferrer"
                   className="text-[#F7F7F7] hover:text-[#03A9F4] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-[#0a0a0a]">
            <h3 className="text-2xl font-semibold mb-6 text-[#F7F7F7]">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://ady-6720.github.io/SSPortfolio/#contact-container" />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-[#0a0a0a] rounded-md text-[#F7F7F7] focus:outline-none focus:border-[#03A9F4] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-[#0a0a0a] rounded-md text-[#F7F7F7] focus:outline-none focus:border-[#03A9F4] transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-[#0a0a0a] rounded-md text-[#F7F7F7] focus:outline-none focus:border-[#03A9F4] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-[#03A9F4] text-white rounded-md hover:bg-[#0288d1] transition-colors font-semibold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-2">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 