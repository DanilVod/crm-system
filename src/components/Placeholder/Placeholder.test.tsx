import { Placeholder } from './Placeholder';
import { render, screen } from '@testing-library/react';

describe('Placeholder', () => {
  it('Render', () => {
    render(<Placeholder />);
    const childrenText = screen.getByText(/Test/i);
    expect(childrenText).toBeInTheDocument();
  });
});
