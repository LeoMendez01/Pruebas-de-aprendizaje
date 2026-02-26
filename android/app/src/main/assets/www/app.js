const display = document.querySelector('#display');
const keys = document.querySelector('.keys');

const state = {
  current: '0',
  previous: null,
  operator: null,
  resetCurrent: false
};

function formatNumber(value) {
  if (value === 'Error') return value;
  const [intPart, decimalPart] = value.toString().split('.');
  const formattedInt = Number(intPart).toLocaleString('es-ES');
  return decimalPart !== undefined ? `${formattedInt}.${decimalPart}` : formattedInt;
}

function render() {
  display.textContent = formatNumber(state.current);
}

function inputNumber(num) {
  if (state.resetCurrent) {
    state.current = num;
    state.resetCurrent = false;
    return;
  }
  state.current = state.current === '0' ? num : state.current + num;
}

function inputDecimal() {
  if (state.resetCurrent) {
    state.current = '0.';
    state.resetCurrent = false;
    return;
  }
  if (!state.current.includes('.')) state.current += '.';
}

function clearAll() {
  state.current = '0';
  state.previous = null;
  state.operator = null;
  state.resetCurrent = false;
}

function deleteLast() {
  if (state.resetCurrent) return;
  state.current = state.current.length > 1 ? state.current.slice(0, -1) : '0';
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? 'Error' : a / b;
    default:
      return b;
  }
}

function setOperator(nextOperator) {
  const currentValue = Number(state.current);

  if (state.previous === null || state.current === 'Error') {
    state.previous = currentValue;
  } else if (state.operator) {
    const result = calculate(state.previous, currentValue, state.operator);
    state.current = String(result);
    state.previous = result;
  }

  state.operator = nextOperator;
  state.resetCurrent = true;
}

function applyPercent() {
  if (state.current === 'Error') return;
  state.current = String(Number(state.current) / 100);
}

function computeResult() {
  if (!state.operator || state.previous === null) return;
  const result = calculate(state.previous, Number(state.current), state.operator);
  state.current = String(result);
  state.previous = null;
  state.operator = null;
  state.resetCurrent = true;
}

keys.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;
  const value = button.dataset.value;

  if (action === 'number') inputNumber(value);
  if (action === 'decimal') inputDecimal();
  if (action === 'clear') clearAll();
  if (action === 'delete') deleteLast();
  if (action === 'operator') setOperator(value);
  if (action === 'percent') applyPercent();
  if (action === 'equals') computeResult();

  render();
});

window.addEventListener('keydown', (event) => {
  const { key } = event;

  if (/^[0-9]$/.test(key)) inputNumber(key);
  else if (key === '.') inputDecimal();
  else if (['+', '-', '*', '/'].includes(key)) setOperator(key);
  else if (key === '%') applyPercent();
  else if (key === 'Backspace') deleteLast();
  else if (key === 'Escape') clearAll();
  else if (key === 'Enter' || key === '=') computeResult();
  else return;

  render();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      // Registro fallido: la app sigue funcionando sin modo offline.
    });
  });
}

render();
