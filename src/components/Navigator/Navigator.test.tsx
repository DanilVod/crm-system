import { render, screen } from '@testing-library/react';
import { Navigator } from './Navigator';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Suspense } from 'react';
describe('Navigator', () => {
  it('render', async () => {
    const { debug } = render(
      <Suspense fallback={<div>Loading...</div>}>
        <Navigator />
      </Suspense>,
      { wrapper: MemoryRouter },
    );
    console.log(debug());
    const childrenText = await screen.getByText(/Dashboard/i);

    expect(childrenText).toBeInTheDocument();
  });
});
