import React from "react";
import { render} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import WorkOrder from "./WorkOrder";

let container = null;

test("renders work order", async () => {
  const fakeWorkOrder = {
    "id": "k3qoOGdq0B",
    "title": "Measure Strap length",
    "description": "Test description",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeWorkOrder)
    })
  );

  await act(async () => {

    container = render(<WorkOrder match={{ params: { id: 'TEST' } }} />);
  });

  expect(container.getByTestId('id').textContent).toBe(fakeWorkOrder.id);
  expect(container.getByTestId('title').textContent).toBe(fakeWorkOrder.title);
  expect(container.getByTestId('description').textContent).toContain(fakeWorkOrder.description);

  global.fetch.mockRestore();
});