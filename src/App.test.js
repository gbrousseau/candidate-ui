import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test('renders correctly', () => {
  const { getByText } = render(<App />);

  getByText("Home");
  getByText("Dashboard");
  getByText("About")

});
