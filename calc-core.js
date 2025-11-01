// Pure functions implementing calculator core operations for testing
function add(a, b){ return a + b }
function sub(a, b){ return a - b }
function mul(a, b){ return a * b }
function div(a, b){ if(b === 0) throw new Error('divide by zero'); return a / b }
function percent(a){ return a / 100 }
function toggleSign(a){ return -a }

module.exports = { add, sub, mul, div, percent, toggleSign }
