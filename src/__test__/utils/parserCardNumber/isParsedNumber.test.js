import { isParsedNumber } from '@/utils/parserCardNumber'

describe('isParsedNumber', () => {
  test('Debería retornar true para un número de tarjeta correctamente formateado', () => {
    expect(isParsedNumber('12.34-56789012-3')).toBe(true)
  })

  test('Debería retornar false para un número de tarjeta mal formateado (sin puntos y guiones)', () => {
    expect(isParsedNumber('1234567890123')).toBe(false)
  })

  test('Debería retornar false si los separadores están en posiciones incorrectas', () => {
    expect(isParsedNumber('12.345-6789012-3')).toBe(false)
  })

  test('Debería retornar false si el número formateado tiene una longitud incorrecta', () => {
    expect(isParsedNumber('12.34-56789012')).toBe(false)
  })

  test('Debería retornar false si el número no contiene solo dígitos después de eliminar los puntos y guiones', () => {
    expect(isParsedNumber('12.34-5678abc1-3')).toBe(false)
  })
})
