import axios, { AxiosResponse, AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Interface for form data
interface HomepageFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  resume: File;
}

interface BrochureFormData {
  name: string;
  email: string;
  phone: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Interface for API error response
interface ApiErrorResponse {
  message?: string;
}

// API service class
export class ApiService {
  // Submit homepage form
  static async submitHomepageForm(data: HomepageFormData): Promise<AxiosResponse> {
    try {
      return await axios.post(`${API_BASE_URL}/submit-homepage`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      throw new Error(axiosError.response?.data?.message || 'Failed to submit homepage form');
    }
  }

  // Submit career form with resume
  static async submitCareerForm(data: CareerFormData): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (data.message) formData.append('message', data.message);
    formData.append('resume', data.resume);

    try {
      return await axios.post(`${API_BASE_URL}/submit-careers`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      throw new Error(axiosError.response?.data?.message || 'Failed to submit career application');
    }
  }

  // Submit brochure form
  static async submitBrochureForm(data: BrochureFormData): Promise<AxiosResponse> {
    try {
      return await axios.post(`${API_BASE_URL}/submit-brochure`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      throw new Error(axiosError.response?.data?.message || 'Failed to submit brochure form');
    }
  }

  // Submit contact form
  static async submitContactForm(data: ContactFormData): Promise<AxiosResponse> {
    try {
      return await axios.post(`${API_BASE_URL}/submit-contact`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      throw new Error(axiosError.response?.data?.message || 'Failed to submit contact form');
    }
  }
}