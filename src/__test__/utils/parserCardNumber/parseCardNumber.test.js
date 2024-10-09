import { parseCardNumber } from '@/utils/parserCardNumber'

describe('parseCardNumber', () => {
  test('Debería formatear correctamente un número de tarjeta de 13 dígitos', () => {
    expect(parseCardNumber('1234567890123')).toBe('12.34-56789012-3')
  })

  test('Debería retornar null si el input no es un string', () => {
    expect(parseCardNumber(1234567890123)).toBe(null)
  })

  test('Debería retornar un string formateado incorrectamente si el input no tiene 13 caracteres', () => {
    expect(parseCardNumber('12345678901')).toBe(null)
  })
})
