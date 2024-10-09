import { unparseCardNumber } from '@/utils/parserCardNumber'

describe('unparseCardNumber', () => {
  test('Debería eliminar los puntos y guiones de un número de tarjeta formateado', () => {
    expect(unparseCardNumber('12.34-56789012-3')).toBe('1234567890123')
  })

  test('Debería devolver el mismo número si no hay puntos o guiones', () => {
    expect(unparseCardNumber('1234567890123')).toBe('1234567890123')
  })
})
