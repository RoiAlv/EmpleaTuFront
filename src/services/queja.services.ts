import Feedback from "../models/Queja";
import { fetchAPI } from "../utils/FetchAPI";
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export class FeedbackService {
  static async getAll() {
    return await fetchAPI(`${API_URL_BASE}/feedback`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  static async getById(id: number) {
    return await fetchAPI(`${API_URL_BASE}/feedback/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  static async create(queja: Partial<Feedback>) {
    return await fetchAPI(`${API_URL_BASE}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queja),
      credentials: 'include',
    });
  }

  static async update(id: number, queja: Partial<Feedback>) {
    return await fetchAPI(`${API_URL_BASE}/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queja),
      credentials: 'include',
    });
  }

  static async delete(id: number) {
    return await fetchAPI(`${API_URL_BASE}/feedback/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  // Método de búsqueda por título
  static async search(title: string) {
    return await fetchAPI(`${API_URL_BASE}/feedback`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      params: {
        title,  // Aquí se pasa el parámetro `title` para buscar por el título
      },
    });
  }
}
