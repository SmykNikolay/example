interface IApiConfig {
  baseURL: string;
  headers?: HeadersInit;
}

export class BaseApi {
  private readonly _baseURL: string;
  private readonly _headers: HeadersInit;

  constructor(config: IApiConfig) {
    this._baseURL = config.baseURL;
    this._headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
  }

  protected async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this._baseURL}${endpoint}`, {
      method: 'GET',
      headers: this._headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  protected async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this._baseURL}${endpoint}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  protected async put<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this._baseURL}${endpoint}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this._baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this._headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}