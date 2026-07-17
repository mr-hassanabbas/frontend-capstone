import { z } from 'zod';

export const userSettingsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  bio: z
    .string()
    .max(200, 'Bio must be 200 characters or less')
    .optional(),
  theme: z.enum(['light', 'dark']),
});

export type UserSettingsFormData = z.infer<typeof userSettingsSchema>;

export const defaultUserSettings: UserSettingsFormData = {
  fullName: '',
  email: '',
  bio: '',
  theme: 'light',
};
