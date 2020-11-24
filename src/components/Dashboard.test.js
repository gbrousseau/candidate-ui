import React from 'react';
import { render} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Dashboard from './Dashboard';

let container = null;

test('renders work orders list in dashboard', async () => {
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

    container = render(<Dashboard />);
  });

  expect(container.getByTestId('row0-id').textContent).toBe(fakeWorkOrders.data.workOrders[0].id);
  expect(container.getByTestId('row0-title').textContent).toBe(fakeWorkOrders.data.workOrders[0].title);
  expect(container.getByTestId('row0-status').textContent).toContain(fakeWorkOrders.data.workOrders[0].status);

  expect(container.getByTestId('row1-id').textContent).toBe(fakeWorkOrders.data.workOrders[1].id);
  expect(container.getByTestId('row1-title').textContent).toBe(fakeWorkOrders.data.workOrders[1].title);
  expect(container.getByTestId('row1-status').textContent).toContain(fakeWorkOrders.data.workOrders[1].status);

  global.fetch.mockRestore();
});

test('Matches snapshot', async() => {
  let tree = null;
  const fakeWorkOrders =
    {
      'data': {
        'workOrders': [
          {
            'id': 'k3qoOGdq0B',
            'title': 'Measure Strap length',
            'description': 'Test description',
            'priority': 'MEDIUM',
            'status': 'OPEN',
            "updatedAt": "2020-04-26T18:16:00.399Z",
            "createdAt": "2020-04-26T18:16:00.399Z",
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
            "updatedAt": "2020-04-02T17:44:25.037Z",
            "createdAt": "2020-04-02T17:00:14.735Z",
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

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeWorkOrders)
    })
  );
  await act(async () => {

    tree = await render(<Dashboard />);
  });

  expect(tree).toMatchSnapshot();
});