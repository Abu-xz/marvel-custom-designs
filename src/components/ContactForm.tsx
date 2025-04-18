import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validateAllFields = () => {
    const errors = {
      name: formData.name.trim() ? "" : "Name is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Please enter a valid email address.",
      service: formData.service.trim() ? "" : "Please select a service.",
      message:
        formData.message.trim().length >= 10
          ? ""
          : "Message must be at least 10 characters.",
    };

    setFormErrors(errors);

    return Object.values(errors).every((err) => err === "");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Implement validation
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateAllFields()) {
      toast.error("Please fix the errors before submitting.");
      setIsSubmitting(false);
      return;
    }

    const web3formData = new FormData();
    web3formData.append("access_key", "a4262795-3666-4910-b1f5-81605763877a");
    web3formData.append("name", formData.name);
    web3formData.append("email", formData.email);
    web3formData.append("service", formData.service);
    web3formData.append("message", formData.message);
    web3formData.append("subject", "You have a message - Stephan Nedumbally");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3formData,
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setIsSubmitting(false);
        toast.success("Message sent successfully!", {
          description: "We will get back to you as soon as possible.",
          style: {
            color: "black",
            backgroundColor: "green",
          },
        });

        setFormData({ name: "", email: "", service: "", message: "" });
        setFormErrors({ name: "", email: "", service: "", message: "" });
      } else {
        toast.error("Failed to send. Try again.");
        setFormData({ name: "", email: "", service: "", message: "" });
        setFormErrors({ name: "", email: "", service: "", message: "" });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      name: "service",
      label: "Service",
      type: "select",
      placeholder: "Select a service",
      required: true,
      options: [
        { value: "", label: "Select a service" },
        { value: "web-design", label: "Web Design" },
        { value: "web-development", label: "Web Development" },
        { value: "3d-modeling", label: "3D Modeling" },
        { value: "branding", label: "Branding" },
        { value: "other", label: "Other" },
      ],
    },
  ];

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="bg-marvel-gray rounded-xl border border-marvel-light-gray/50 hover:border-marvel-red/50 transition-all duration-300 p-8">
        <div className="space-y-5">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-white/90"
              >
                {field.label}
                {field.required && (
                  <span className="text-marvel-red ml-1">*</span>
                )}
              </label>

              <motion.div
                variants={inputVariants}
                animate={focused === field.name ? "focus" : "blur"}
              >
                {field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                  />
                )}
              </motion.div>
              {formErrors[field.name] && (
                <p className="text-red-500 text-sm">{formErrors[field.name]}</p>
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
            <motion.div
              variants={inputVariants}
              animate={focused === "message" ? "focus" : "blur"}
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                required
                rows={5}
                className="w-full px-4 py-3 bg-marvel-gray rounded-lg border border-marvel-light-gray/50 text-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50 transition-all duration-200"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </motion.div>
            {formErrors.message && (
              <p className="text-red-400 text-sm">{formErrors.message}</p>
            )}
          </div>

          <motion.button
            type="button"
            onClick={handleSubmit}
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
      </div>
    </>
  );
};

export default ContactForm;
