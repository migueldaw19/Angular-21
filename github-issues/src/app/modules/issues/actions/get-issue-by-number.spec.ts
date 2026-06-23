import { vi } from 'vitest';
import { environment } from '../../../../environments/environment.development';
import { getIssueByNumber } from './get-issue-by-number';


const mockIssue = {
  id: 1,
  number: 123,
  title: 'Test issue',
  body: 'Test body',
};

const BASE_URL = environment.baseUrl;

describe('getIssueByNumber', () => {
  const mockIssueNumber = '123';
  let originalFetch: typeof window.fetch;

  // Función que se realiza antes de cada prueba
  beforeEach(() => {
    originalFetch = window.fetch;
  });

  // Función que se realiza después de cada prueba
  afterEach(() => {
    window.fetch = originalFetch;
  });

  it('should fetch and return an issue successfully', async () => {
    // Esto nos permite modificar el fetch, haciendo que independientemente de la consulta que se haga siempre va a devolver ok con lo que nosotros hemos indicado
    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockIssue),
    });


    const result = await getIssueByNumber(mockIssueNumber);

    // Esta prueba nos permite ver si el fetch apunta al dominio correctamente
    expect(window.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/issues/${mockIssueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${environment.gitHubToken}`,
        },
      }
    );

    // Como son objetos mejor usar toEqual en vez de toBe
    expect(result).toEqual(mockIssue);
  });

  it('should throw an error when response is not ok', async () => {
    // Con este independientemente de la consulta que hagamos va a dar error
    window.fetch = vi.fn().mockRejectedValue({
      ok: false,
      status: 404,
      json: vi.fn(),
    });

    await expect(getIssueByNumber(mockIssueNumber)).rejects.toBe(
      `Can't load issue ${mockIssueNumber}`
    );
  });

  it('should throw an error when fetch fails', async () => {
    // Con este independientemente de la consulta que hagamos va a dar error
    window.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(getIssueByNumber(mockIssueNumber)).rejects.toBe(
      `Can't load issue ${mockIssueNumber}`
    );
  });
});