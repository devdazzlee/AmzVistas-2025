import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  phone: z.string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be less than 15 characters")
    .regex(/^[\+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  
  date: z.string()
    .optional()
    .refine((date) => {
      if (!date || date.trim() === '') return true;
      // For date input type, it should be in YYYY-MM-DD format
      // Just check if it's a valid date string
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return dateRegex.test(date) || !isNaN(new Date(date).getTime());
    }, "Please enter a valid date"),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

// Email subscription form validation schema
export const emailSubscriptionSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EmailSubscriptionData = z.infer<typeof emailSubscriptionSchema>;
