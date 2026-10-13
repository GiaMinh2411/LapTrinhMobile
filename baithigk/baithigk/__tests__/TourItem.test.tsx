import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TourItem from '../components/TourItem';

const mockTour = {
  id: '1', name: 'Tour Đà Lạt', city: 'Đà Lạt', days: 3, price: 1500000, 
  seats: 2, departure: '2026-11-05', image: 'url', isFavorite: false
};

describe('TourItem Component', () => {
  it('hides city when compact is true, shows when false', () => {
    const { queryByText, rerender, getByText } = render(<TourItem tour={mockTour} compact={true} onPress={jest.fn()} onToggleFavorite={jest.fn()} />);
    expect(queryByText('Đà Lạt')).toBeNull(); 

    rerender(<TourItem tour={mockTour} compact={false} onPress={jest.fn()} onToggleFavorite={jest.fn()} />);
    expect(getByText('Đà Lạt')).toBeTruthy();
  });

  it('handles button presses correctly', () => {
    const onPressMock = jest.fn();
    const onToggleFavMock = jest.fn();
    const { getByTestId, getByText } = render(<TourItem tour={mockTour} onPress={onPressMock} onToggleFavorite={onToggleFavMock} />);

    fireEvent.press(getByTestId('fav-btn'));
    expect(onToggleFavMock).toHaveBeenCalledWith('1', true);
    expect(onPressMock).not.toHaveBeenCalled();

    fireEvent.press(getByText('Tour Đà Lạt'));
    expect(onPressMock).toHaveBeenCalledWith(mockTour);
  });
});