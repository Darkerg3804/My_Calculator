// ============================================================
// 1. FUNCIÓN CALCULAR: Solo hace operaciones con números
// ============================================================
function calcular(a: number, operador: string, b: number): number {
  // COMPLETAR: Suma, Resta, Multiplicación, División, Potencia
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('División por cero');
      }
      return a / b;
    case '^':
      return Math.pow(a, b);

    case '%':
      return a % b;
    
    case '√':
      if (a < 0) {
        throw new Error('Error de dominio');
      }
      return Math.sqrt(a);
    default:
      throw new Error(`Operador desconocido: ${operador}`);
      
  }
}

// ============================================================
// 2. FUNCIÓN SINTAXIS: Valida la sintaxis de la expresión
// ============================================================
function validarSintaxis(expresion: string): boolean {
    // COMPLETAR: Validar la sintaxis de la expresión
    return true;
}
// ============================================================


// ============================================================
// 3. FUNCIÓN EVALUAR: Divide la expresión y llama a calcular
// ============================================================
export function evaluar(expresion: string): number {

      expresion = expresion.replace(/\s+/g, ''); // Eliminar espacios
      
      // Validar expresiones con una funcion que evalua la sintaxis de la expresion