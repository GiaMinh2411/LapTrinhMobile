import { formatDate, getSeatLabel, prepareFlatListData, Tour } from '../utils/tour';

describe('Tour Utils', () => {
  it('formatDate formats YYYY-MM-DD correctly', () => {
    expect(formatDate('2026-11-05')).toBe('05/11/2026');
  });

  it('getSeatLabel returns correct boundary labels', () => {
    expect(getSeatLabel(0)).toBe('Hết chỗ');
    expect(getSeatLabel(3)).toBe('Chỉ còn 3 chỗ');
    expect(getSeatLabel(4)).toBe('Còn 4 chỗ');
  });

  it('prepareFlatListData groups and sorts correctly', () => {
    const mockTours: Tour[] = [
      { id: '1', city: 'Đà Nẵng', departure: '2026-12-01', name: '', days: 3, price: 1, seats: 1, image: '', isFavorite: false },
      { id: '2', city: 'Đà Lạt', departure: '2026-11-05', name: '', days: 3, price: 1, seats: 1, image: '', isFavorite: false },
      { id: '3', city: 'Đà Lạt', departure: '2026-10-01', name: '', days: 3, price: 1, seats: 1, image: '', isFavorite: false },
    ];
    
    const { flatData } = prepareFlatListData(mockTours);
    expect(flatData[0].isHeader).toBe(true);
    expect(flatData[0].title).toContain('Đà Lạt');
    expect(flatData[1].id).toBe('3');
    expect(flatData[2].id).toBe('2');
  });
});