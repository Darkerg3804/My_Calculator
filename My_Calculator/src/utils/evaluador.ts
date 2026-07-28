import { evaluate } from 'mathjs';

// ============================================================
// FUNCIÓN EVALUAR - Usando math.js
// ============================================================
export function evaluar(expresion: string): number | string {
  try {
    // 1. LIMPIAR: Eliminar espacios
    let cleanExpr = expresion.replace(/\s/g, '');
    
    // 2. REEMPLAZAR SÍMBOLOS DE LA CALCULADORA
    //    para que math.js los entienda
    cleanExpr = cleanExpr
      .replace(/×/g, '*')           // × → *
      .replace(/÷/g, '/')           // ÷ → /
      .replace(/√/g, 'sqrt(')       // √ → sqrt(
      .replace(/\^/g, '^')          // ^ → ^ (math.js lo entiende)
      .replace(/x²/g, '^2')         // x² → ^2
    
    // 3. CERRAR PARÉNTESIS DE sqrt()
    //    Si hay sqrt( sin cerrar, agregamos )
    let parentesisSqrt = 0;
    let resultadoParcial = '';
    for (let i = 0; i < cleanExpr.length; i++) {
      if (cleanExpr[i] === 's' && cleanExpr[i+1] === 'q' && cleanExpr[i+2] === 'r' && cleanExpr[i+3] === 't' && cleanExpr[i+4] === '(') {
        parentesisSqrt++;
        resultadoParcial += 'sqrt(';
        i += 4; // Saltar "sqrt("
      } else if (cleanExpr[i] === ')') {
        if (parentesisSqrt > 0) {
          parentesisSqrt--;
        }
        resultadoParcial += ')';
      } else {
        resultadoParcial += cleanExpr[i];
      }
    }
    // Cerrar paréntesis de sqrt que quedaron abiertos
    while (parentesisSqrt > 0) {
      resultadoParcial += ')';
      parentesisSqrt--;
    }
    cleanExpr = resultadoParcial;

    // 4. MANEJAR PORCENTAJE: 200% → 200/100
    //    Buscar números seguidos de % y reemplazar
    cleanExpr = cleanExpr.replace(/(\d+)%/g, '($1/100)');

    // 5. MANEJAR NÚMEROS NEGATIVOS (opcional)
    //    math.js ya los maneja bien

    // 6. EVALUAR usando math.js
    const resultado = evaluate(cleanExpr);

    // 7. VERIFICAR que el resultado sea un número válido
    if (typeof resultado !== 'number' || !isFinite(resultado)) {
      return 'Resultado inválido';
    }

    // 8. REDONDEAR para evitar errores de precisión (ej: 0.1 + 0.2 = 0.30000000000000004)
    return Math.round(resultado * 1000000) / 1000000;
  } catch (error) {
    // 9. Si hay error, devolver mensaje amigable
    return 'Error en la expresión';
  }
}