// Basic calculator logic
const displayEl = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let state = {
  current: '0',
  previous: null,
  operator: null,
  overwrite: false,
};

function updateDisplay(){
  displayEl.textContent = state.current;
}

function inputDigit(d){
  if(state.overwrite){
    state.current = d === '.' ? '0.' : d;
    state.overwrite = false;
    return;
  }
  if(d === '.' && state.current.includes('.')) return;
  if(state.current === '0' && d !== '.') state.current = d;
  else state.current = state.current + d;
}

function clearAll(){
  state.current = '0';
  state.previous = null;
  state.operator = null;
  state.overwrite = false;
}

function toggleSign(){
  if(state.current === '0') return;
  if(state.current.startsWith('-')) state.current = state.current.slice(1);
  else state.current = '-' + state.current;
}

function percent(){
  state.current = String(parseFloat(state.current) / 100);
  state.overwrite = true;
}

function chooseOperator(op){
  if(state.operator && !state.overwrite){
    compute();
  }
  state.previous = state.current;
  state.operator = op;
  state.overwrite = true;
}

function compute(){
  if(!state.operator || state.previous == null) return;
  const prev = parseFloat(state.previous);
  const curr = parseFloat(state.current);
  let result = 0;
  switch(state.operator){
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '×': result = prev * curr; break;
    case '÷':
      if(curr === 0){ alert('Cannot divide by zero'); clearAll(); updateDisplay(); return; }
      result = prev / curr; break;
    default: return;
  }
  state.current = String(result);
  state.previous = null;
  state.operator = null;
  state.overwrite = true;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const num = btn.dataset.num;
    const action = btn.dataset.action;
    if(num !== undefined){
      inputDigit(num);
      updateDisplay();
      return;
    }
    if(action){
      if(action === 'clear'){ clearAll(); updateDisplay(); return; }
      if(action === 'sign'){ toggleSign(); updateDisplay(); return; }
      if(action === 'percent'){ percent(); updateDisplay(); return; }
      if(action === 'op'){ chooseOperator(btn.textContent.trim()); updateDisplay(); return; }
      if(action === 'equals'){ compute(); updateDisplay(); return; }
    }
  })
});

// Keyboard support
window.addEventListener('keydown', (e) => {
  const key = e.key;
  if(/^[0-9]$/.test(key)){
    inputDigit(key); updateDisplay(); return;
  }
  if(key === '.') { inputDigit('.'); updateDisplay(); return; }
  if(key === 'Enter' || key === '=') { compute(); updateDisplay(); return; }
  if(key === 'Backspace'){
    if(state.current.length <= 1){ state.current = '0'; }
    else state.current = state.current.slice(0, -1);
    updateDisplay(); return;
  }
  if(key === '+' || key === '-') { chooseOperator(key); updateDisplay(); return; }
  if(key === '*') { chooseOperator('×'); updateDisplay(); return; }
  if(key === '/') { chooseOperator('÷'); updateDisplay(); return; }
  if(key === '%'){ percent(); updateDisplay(); return; }
});

// initialize
updateDisplay();
