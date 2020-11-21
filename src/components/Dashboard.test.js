import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Dashboard from './Dashboard';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders work orders in dashboard', async () => {
  const fakeWorkOrders =
    {
      'data': {
        'workOrders': [
          {
            'id': 'k3qoOGdq0B',
            'rootId': 'h7O9kRkk2A',
            'number': '024',
            'title': 'Measure Strap length',
            'description': 'Test description',
            'priority': 'MEDIUM',
            'status': 'OPEN',
            'location': [
              {
                'id': 'DrwFuwsjt0',
                'name': 'Long Beach Convention Center',
                'address': '300 E Ocean Blvd, Long Beach, CA 90802, USA',
                '__typename': 'Location',
              },
            ],
          }, {
            'id': 'fzXzwxgHMC',
            'rootId': null,
            'number': '036',
            'title': 'gary admin delete test',
            'description': null,
            'priority': 'HIGH',
            'status': 'IN_PROGRESS',
            'location': [
              {
                'id': 'DrwFuwsjt0',
                'name': 'Long Beach Convention Center',
                'address': '300 E Ocean Blvd, Long Beach, CA 90802, USA',
                '__typename': 'Location',
              },
            ]
          }
        ]
      }
    };

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeWorkOrders),
    }),
  );
  await act(async () => {

    render(<Dashboard />, container);
  });

  expect(container.querySelector('[data-testid=\'row0-id\']').textContent).toBe(fakeWorkOrders.data.workOrders[0].id);
  expect(container.querySelector('[data-testid=\'row0-title\']').textContent).toBe(fakeWorkOrders.data.workOrders[0].title);
  expect(container.querySelector('[data-testid=\'row0-status\']').textContent).toContain(fakeWorkOrders.data.workOrders[0].status);

  expect(container.querySelector('[data-testid=\'row1-id\']').textContent).toBe(fakeWorkOrders.data.workOrders[1].id);
  expect(container.querySelector('[data-testid=\'row1-title\']').textContent).toBe(fakeWorkOrders.data.workOrders[1].title);
  expect(container.querySelector('[data-testid=\'row1-status\']').textContent).toContain(fakeWorkOrders.data.workOrders[1].status);
  global.fetch.mockRestore();
});