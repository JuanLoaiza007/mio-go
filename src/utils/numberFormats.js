function numberToCOP (amount) {
  if (typeof amount !== 'number') {
    return false
  }
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount)
}

export { numberToCOP }
