// TODO: set this to the real application deadline before launch.
const APPLICATION_DEADLINE = new Date('2026-12-01T23:59:59-07:00');

function updateCountdown(){
  const box = document.getElementById('countdown');
  if(!box) return;
  const now = new Date();
  const diff = APPLICATION_DEADLINE - now;

  if(diff <= 0){
    box.classList.add('closed');
    document.querySelector('#countdown .cd-label').textContent = 'Applications closed';
    document.getElementById('cdDays').textContent = '00';
    document.getElementById('cdHours').textContent = '00';
    document.getElementById('cdMinutes').textContent = '00';
    document.getElementById('cdSeconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('cdDays').textContent = String(days).padStart(2,'0');
  document.getElementById('cdHours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cdMinutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('cdSeconds').textContent = String(seconds).padStart(2,'0');
}

document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const gateCloses = document.getElementById('gateCloses');
  if(gateCloses){
    gateCloses.textContent = APPLICATION_DEADLINE.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
});
