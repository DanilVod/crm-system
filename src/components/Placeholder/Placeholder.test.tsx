import { Placeholder } from './Placeholder';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Placeholder', () => {
  it('Render', () => {
    const placeholder = render(<Placeholder />).getByTestId('placeholder');
    expect(placeholder).toBeInTheDocument();
  });
  it('Change value', () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <Placeholder placeholderText="jane" onInputText={setSearch} />,
    );
    const searchInput = queryByPlaceholderText('jane');

    fireEvent.change(searchInput, { target: { value: 'su' } });
    expect(searchInput.value).toBe('su');
  });
});
