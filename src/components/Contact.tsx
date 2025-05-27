
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll respond with the same attention to detail as a Wes Anderson film.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-wes-cream">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-wes-navy mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-wes-burgundy mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-wes-pink border-4 border-wes-navy p-8 shadow-lg">
            <h3 className="font-serif text-3xl font-bold text-wes-navy mb-6">
              Let's Create Something Extraordinary
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white border-2 border-wes-forest p-4">
                <h4 className="font-sans font-semibold text-wes-navy mb-2">Email</h4>
                <p className="font-sans text-wes-navy">hello@portfolio.com</p>
              </div>
              
              <div className="bg-white border-2 border-wes-coral p-4">
                <h4 className="font-sans font-semibold text-wes-navy mb-2">Phone</h4>
                <p className="font-sans text-wes-navy">+1 (555) 123-4567</p>
              </div>
              
              <div className="bg-white border-2 border-wes-mustard p-4">
                <h4 className="font-sans font-semibold text-wes-navy mb-2">Location</h4>
                <p className="font-sans text-wes-navy">New York, NY</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-wes-sage border-2 border-wes-navy">
              <p className="font-sans text-wes-navy italic leading-relaxed">
                "Every great collaboration begins with a conversation. Let's discuss your project with the same care and attention that goes into every frame of a beautiful film."
              </p>
            </div>
          </div>

          <div className="bg-white border-4 border-wes-burgundy p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans font-medium text-wes-navy mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-2 border-wes-navy focus:border-wes-burgundy"
                    required
                  />
                </div>
                
                <div>
                  <label className="font-sans font-medium text-wes-navy mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-wes-navy focus:border-wes-burgundy"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="font-sans font-medium text-wes-navy mb-2 block">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-2 border-wes-navy focus:border-wes-burgundy"
                  required
                />
              </div>
              
              <div>
                <label className="font-sans font-medium text-wes-navy mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="border-2 border-wes-navy focus:border-wes-burgundy resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-wes-burgundy hover:bg-wes-navy text-white font-sans font-medium py-3 px-6 border-2 border-wes-navy transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
