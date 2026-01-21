import axios from 'axios';

// URLs organizadas por tipo
const urlsPorTipo = {
  respiratorio: 'https://docs.google.com/spreadsheets/d/10E0mBvsPR0KDhv90f-LT-zQHdNChSzEZM_dUyISCX5E/gviz/tq?tqx=out:csv&gid=0',
  antiinfeccioso: 'https://docs.google.com/spreadsheets/d/1XJZZofQMgQ01PejSBHfAkPSFhokHeWCqhBL46qEHtQw/gviz/tq?tqx=out:csv&gid=0'
};

async function obtenerProductosDeUrl(url) {
  try {
    const response = await axios.get(url);
    const csvText = response.data;
    const lineas = csvText.split('\n');
    const productos = [];
    
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (!linea) continue;
      
      const partes = linea.replace(/"/g, '').split(',');
      
      if (partes.length >= 3 && partes[1] && partes[2]) {
        const tipo = partes[1].trim();
        const nombre = partes[2].trim();
        
        if (tipo === 'LÍNEA' && nombre === 'PRODUCTOS') continue;
        if (tipo.includes('LISTADO DE PRODUCTOS')) continue;
        
        if (tipo && nombre) {
          productos.push({ tipo, nombre });
        }
      }
    }
    
    return productos;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

export async function obtenerProductos() {
  const resultado = [];
  
  for (const [tipoCategoria, url] of Object.entries(urlsPorTipo)) {
    const productos = await obtenerProductosDeUrl(url);
    
    resultado.push({
      tipo: tipoCategoria,
      productos: productos
    });
  }
  
  return resultado;
}