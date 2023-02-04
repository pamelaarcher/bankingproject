import * as React from 'react';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('Deposit', async () => {

  const root = document.createElement('div');
  const {getByText, getByPlaceholderText, getByLabelText} = render(<App/>, root);

  const button = getByText('Deposit');

  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText('Deposit Amount')).toBeInTheDocument();
  })


  const input = getByPlaceholderText('Enter deposit amount');

  userEvent.type(input, '50');

  const depositbtn = getByText('Deposit into Account');
  userEvent.click(depositbtn);

  await waitFor(() => {
    expect(screen.getByText('Success')).toBeInTheDocument();
  })
  
});