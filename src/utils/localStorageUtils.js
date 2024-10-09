function guardarEnLocalStorage (clave, valor) {
  try {
    const valorJSON = JSON.stringify(valor)
    localStorage.setItem(clave, valorJSON)
  } catch (error) {
    console.error('Error al guardar en localStorage:', error)
  }
}

function obtenerDeLocalStorage (clave) {
  try {
    const valorJSON = localStorage.getItem(clave)
    if (valorJSON !== null) {
      return JSON.parse(valorJSON)
    } else {
      return null
    }
  } catch (error) {
    console.error('Error al obtener de localStorage:', error)
    return null
  }
}

function eliminarDeLocalStorage (clave) {
  try {
    localStorage.removeItem(clave)
  } catch (error) {
    console.error('Error al eliminar de localStorage:', error)
  }
}

function limpiarLocalStorage () {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error al limpiar localStorage:', error)
  }
}

export {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
  eliminarDeLocalStorage,
  limpiarLocalStorage
}
