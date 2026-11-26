const board=document.querySelector('#board'),statusEl=document.querySelector('#status'),diceEl=document.querySelector('#dice');let positions=[0,0],player=0;
const jumps={4:14,9:31,20:38,28:84,40:59,63:81,71:91,17:7,54:34,62:19,64:60,87:24,93:73,95:75,99:78};
const cells=[];for(let n=100;n>=1;n--){const d=document.createElement('div');d.className='cell';d.dataset.n=n;cells.push(d);board.append(d)}
function render(){cells.forEach(c=>{const n=+c.dataset.n;c.textContent=n; if(positions[0]===n)c.innerHTML+= ' <span class="p1">●</span>';if(positions[1]===n)c.innerHTML+=' <span class="p2">●</span>'})}
document.querySelector('#roll').addEventListener('click',()=>{if(positions.some(p=>p===100))return;const roll=1+Math.floor(Math.random()*6);let next=positions[player]+roll;if(next<=100){next=jumps[next]||next;positions[player]=next}diceEl.textContent=`Player ${player+1} rolled ${roll}.`;render();if(next===100){statusEl.textContent=`Player ${player+1} wins!`;return}player=1-player;statusEl.textContent=`Player ${player+1}'s turn`;});
render();
