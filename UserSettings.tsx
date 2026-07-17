import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSettingsSchema, UserSettingsFormData, defaultUserSettings } from '../schemas/userSettingsSchema';

interface UserSettingsProps {
  onSubmit: (data: UserSettingsFormData) => void;
}

export function UserSettings({ onSubmit }: UserSettingsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserSettingsFormData>({
    resolver: zodResolver(userSettingsSchema),
    mode: 'onBlur',
    defaultValues: defaultUserSettings,
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Settings</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            {...register('fullName')}
            id="fullName"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
            Bio (Optional)
          </label>
          <textarea
            {...register('bio')}
            id="bio"
            rows={3}
            aria-invalid={!!errors.bio}
            aria-describedby={errors.bio ? 'bio-error' : undefined}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.bio ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
            }`}
          />
          {errors.bio && (
            <p id="bio-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.bio.message}
            </p>
          )}
        </div>

        {/* Theme Toggle */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Theme Preference</span>
          <div className="flex space-x-4" role="group" aria-label="Theme preference">
            <button
              type="button"
              onClick={() => {/* Handle theme change */}}
              className={`px-4 py-2 rounded-md border ${
                /* Add logic for active state */ 'bg-indigo-600 text-white border-indigo-600'
              }`}
              aria-pressed="true"
            >
              Light
            </button>
            <button
              type="button"
              onClick={() => {/* Handle theme change */}}
              className={`px-4 py-2 rounded-md border ${
                /* Add logic for active state */ 'bg-white text-gray-700 border-gray-300'
              }`}
              aria-pressed="false"
            >
              Dark
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
