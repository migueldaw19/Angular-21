import { vi } from 'vitest';
import { environment } from '../../../../environments/environment.development';
import { getIssuesComments } from './get-issue-comments-by-number';

const mockComments = [
  {
    id: 1,
    number: 123,
    title: 'Test comment 1',
    body: 'Test body 1',
  },
  {
    id: 2,
    number: 223,
    title: 'Test comment 2',
    body: 'Test body 2',
  },
];

const BASE_URL = environment.baseUrl;

describe('getIssueCommentsByNumber', () => {
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

  it('should fetch and return comments successfully', async () => {
    // Esto nos permite modificar el fetch, haciendo que independientemente de la consulta que se haga siempre va a devolver ok con lo que nosotros hemos indicado
    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockComments),
    });

    const result = await getIssuesComments(mockIssueNumber);

    // Esta prueba nos permite ver si el fetch apunta al dominio correctamente
    expect(window.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/issues/${mockIssueNumber}/comments`,
      {
        headers: {
          Authorization: `Bearer ${environment.gitHubToken}`,
        },
      }
    );

    // Como son objetos mejor usar toEqual en vez de toBe
    expect(result).toEqual(mockComments);
  });

  it('should throw an error when response is not ok', async () => {
    // Con este independientemente de la consulta que hagamos va a dar error
    window.fetch = vi.fn().mockRejectedValue({
      ok: false,
      status: 404,
      json: vi.fn(),
    });

    await expect(getIssuesComments(mockIssueNumber)).rejects.toBe(
      `Can't load comments`
    );
  });

  it('should throw an error when fetch fails', async () => {
    // Con este independientemente de la consulta que hagamos va a dar error
    window.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(getIssuesComments(mockIssueNumber)).rejects.toBe(
      `Can't load comments`
    );
  });
});