
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      name: 'service',
      label: 'Service',
      type: 'select',
      placeholder: 'Select a service',
      required: true,
      options: [
        { value: '', label: 'Select a service' },
        { value: 'web-design', label: 'Web Design' },
        { value: 'web-development', label: 'Web Development' },
        { value: '3d-modeling', label: '3D Modeling' },
        { value: 'branding', label: 'Branding' },
        { value: 'other', label: 'Other' },
      ],
    },
  ];

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="marvel-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-5">
        {formFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-white/90"
            >
              {field.label}
              {field.required && <span className="text-marvel-red ml-1">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <motion.select
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
                variants={inputVariants}
                whileFocus="focus"
                onBlur={() => {}}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </motion.select>
            ) : (
              <motion.input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
                variants={inputVariants}
                whileFocus="focus"
                onBlur={() => {}}
              />
            )}
          </div>
        ))}
        
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white/90"
          >
            Message <span className="text-marvel-red">*</span>
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            required
            rows={5}
            className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
            variants={inputVariants}
            whileFocus="focus"
            onBlur={() => {}}
          />
        </div>
        
        <motion.button
          type="submit"
          className="marvel-button w-full py-4 flex items-center justify-center"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
