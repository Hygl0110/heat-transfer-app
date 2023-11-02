//bibliotteca nerdamer

//contante de ...
const v = 5.67e-8;

//potencia de caballos a watts
const toWatts = (potencia) => {
  return potencia * 745.7;
};

//temperatura de celcious a kelvin
const toKelvin = (temp) => {
  return temp + 273.15;
};

//potencia de salida
const outPower = (power, efficiency) => {
  return power * efficiency;
};

//Q de conveccion
export const Qconv = (h, As, Tinf, Ts) => {
  Tinf = toKelvin(Tinf);
  return h * As * Math.abs(Ts - Tinf);
};

//Q de radiacion
export const Qrad = (E, As, Ts, Talr) => {
  Talr = toKelvin(Talr);

  return E * v * As * Math.abs(Math.pow(Ts, 4) - Math.pow(Talr, 4));
};

//(1-n)Pi
export const Pi = (n, Pin) => {
  return (1 - n) * Pin;
};

//Metodo Numerico Newton-Raphson
function findRoots(coefficients, p0, tolerance, maxIterations) {
  const n = coefficients.length;

  function polinomio(x) {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += coefficients[i] * Math.pow(x, n - 1 - i);
    }
    return result;
  }

  function derivada(x) {
    let result = 0;
    for (let i = 0; i < n - 1; i++) {
      result += (n - 1 - i) * coefficients[i] * Math.pow(x, n - 2 - i);
    }
    return result;
  }

  let p = p0;
  let iterations = 0;

  while (iterations < maxIterations) {
    const pNext = p - polinomio(p) / derivada(p);

    if (Math.abs(pNext - p) < tolerance) {
      return pNext;
    }

    p = pNext;
    iterations++;
  }

  return null; // No se encontró una raíz en las iteraciones especificadas
}

//Calculo de Ts
export const Ts = (Pin, h, E, As, Tinf, n) => {
  Pin = toWatts(Pin);
  const Pout = outPower(Pin, n);
  Tinf = toKelvin(Tinf);

  const v = 5.670373e-8;

  //coefficients
  const a = E * v * As;
  const b = 0;
  const c = 0;
  const d = h * As;
  const e = Pin - Pout + h * As * Tinf + E * v * As * Math.pow(Tinf, 4);

  //degree four polynomial roots
  try {
    const coeficientes = [a, b, c, d, -1 * e]; // Coeficientes del polinomio
    const p0 = 1; // Punto de inicio
    const tolerance = 1e-6; // Tolerancia para la convergencia
    const maxIterations = 100; // Número máximo de iteraciones

    const root = findRoots(coeficientes, p0, tolerance, maxIterations);

    return root;
  } catch {
    return 0;
  }
};
