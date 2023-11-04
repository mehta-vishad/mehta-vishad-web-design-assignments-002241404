document.addEventListener("DOMContentLoaded", function () {
    const disp = document.getElementById('stopwatch');
    const datePicker = document.getElementById('date-picker');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');
    let intervalId = null;
    let elapsedTime = 0;

    
    datePicker.valueAsDate = new Date();
    datePicker.addEventListener('keydown', (e) => {
        e.preventDefault(); 
    });

    
    const updatedisp = () => {
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        disp.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    
    const pad = (number) => {
        return String(number).padStart(2, '0');
    };

    
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    
    startBtn.addEventListener('click', () => {
        if (intervalId !== null) return; 
        intervalId = setInterval(() => {
            elapsedTime += 1000;
            updatedisp();
        }, 1000);
    });

    
    stopBtn.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            
            await delay(0);
        }
    });

    
    resetBtn.addEventListener('click', async () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        elapsedTime = 0;
        updatedisp();
        
        await delay(0);
    });
});