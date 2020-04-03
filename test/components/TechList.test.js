import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TechList from '../../src/components/TechList';

// data-testid
describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />)

    fireEvent.click(getByText('Adicionar'));
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});