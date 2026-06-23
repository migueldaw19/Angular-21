import {
  injectQuery,
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { IssuesService } from './issues.service';
import { TestBed } from '@angular/core/testing';
import { State } from '../interfaces';
import { ApplicationRef } from '@angular/core';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // ✅ faster failure tests
    },
  },
});

describe('IssuesService', () => {
  let service: IssuesService;

  // Antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Como el service usa tanstak query hay que añadirlo de la siguiente manera
      providers: [provideTanStackQuery(queryClient)],
    });
    service = TestBed.inject(IssuesService);
  });

  // Después de cada prueba
  afterEach(() => {
    queryClient.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default values', () => {
    expect(service.selectedState()).toBe(State.All);
    expect(service.selectedLabels()).toEqual(new Set<string>());
    // isLoading para probar que la consulta se está realizando
    expect(service.labelsQuery.isLoading()).toBe(true);
    expect(service.issuesQuery.isLoading()).toBe(true);
  });

  it('should set selectedLabels', () => {
    const label = 'Accessibility';

    service.toggleLabel(label);
    // has es un metodo que tiene Set
    expect(service.selectedLabels().has(label)).toBe(true);

    service.toggleLabel(label);
    expect(service.selectedLabels().has(label)).toBe(false);
  });

  it('should set selected state, OPEN, CLOSE, ALL', () => {
    const newState = State.Closed;
    service.showIssuesByState(newState);

    expect(service.selectedState()).toBe(newState);
  });

  it('should resolve labelsQuery when is called', async () => {
    // Primero vemos si está pendiente de hacer la consulta
    expect(service.labelsQuery.status()).toBe('pending');

    // refetch() sirve para volver a ejecutar manualmente la query y actualizar sus datos
    const { status, data } = await service.labelsQuery.refetch();
    // tick indica que se espere al siguiente cambio
    TestBed.tick();

    expect(status).toBe('success');
    expect(data?.length).toBe(30);

    const label = data!.at(0)!;
    // console.log(label);

    expect(typeof label.id).toBe('number'); // : 2732535159,
    expect(typeof label.node_id).toBe('string'); // : 'MDU6TGFiZWwyNzMyNTM1MTU5',
    expect(typeof label.url).toBe('string'); // : 'https://api.github.com/repos/angular/angular/labels/Accessibility',
    expect(typeof label.name).toBe('string'); // : 'Accessibility',
    expect(typeof label.color).toBe('string'); // : 'b52eea',
    expect(typeof label.default).toBe('boolean'); // : false,
    expect(typeof label.description).toBe('string'); // : 'issues related to accessibility (a11y)'

    // expect(service.labelsQuery.data()!.length).toBe(30);
  });

  it('should set selectedLabels and get issues by Label', async () => {
    const myLabel = 'Accessibility';

    service.toggleLabel(myLabel);
    expect(service.selectedLabels().has(myLabel)).toBe(true);
    // Sin esto el expect status dara error porque lo considerará pendiente
    TestBed.tick();

    const { data, status } = await service.issuesQuery.refetch();

    expect(status).toBe('success');

    data!.forEach((issue) => {
      const hasLabel = issue.labels.some((label) => label.name === myLabel);

      expect(hasLabel).toBe(true);
    });
  });
});