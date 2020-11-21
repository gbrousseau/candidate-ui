import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WorkOrder from "./WorkOrder";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders work order", async () => {
  const fakeWorkOrder = {
    "id": "k3qoOGdq0B",
    "rootId": "h7O9kRkk2A",
    "number": "024",
    "title": "Measure Strap length",
    "description": "Test description",
    "priority": "MEDIUM",
    "status": "OPEN",
    "category": "Meter",
    "dueDate": "2020-04-06T17:57:30.933Z",
    "duration": 1,
    "archived": false,
    "schedule": {
      "value": "weekly",
      "interval": 1,
      "type": "weeks",
      "days": null,
      "useLastCompleted": null,
      "__typename": "WorkOrderSchedule"
    },
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeWorkOrder)
    })
  );

  await act(async () => {

    render(<WorkOrder />, container);
  });

  expect(container.querySelector("[data-testid='id']").textContent).toBe(fakeWorkOrder.id);
  expect(container.querySelector("[data-testid='title']").textContent).toBe(fakeWorkOrder.title);
  expect(container.querySelector("[data-testid='description']").textContent).toContain(fakeWorkOrder.description);

  global.fetch.mockRestore();
});