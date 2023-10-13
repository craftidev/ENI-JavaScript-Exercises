// Main entry of the feature
export default function exercise5() {
    return createView();
}

//Views layer
function createView() {
    const outputView = document.createElement('div');
    const descriptionView = document.createElement('h2');
    const totalAverageCounterView = document.createElement('div');
    const timeChunkAverageCounterView = document.createElement('div');
    const textareaView = document.createElement('textarea');
    const resetButtonView = document.createElement('button');
    
    outputView.className = 'speed-main-div';
    descriptionView.className = 'speed-h2';
    totalAverageCounterView.className = 'speed-counter';
    timeChunkAverageCounterView.className = 'speed-counter';
    textareaView.className = 'speed-textarea';
    resetButtonView.className ='speed-button';

    descriptionView.textContent = 'The calculations start when you enter your first character.';
    totalAverageCounterView.innerHTML = 'Total average: <strong>0</strong> char/sec';
    timeChunkAverageCounterView.innerHTML = 'Time chunk average: <strong>0</strong> char/sec';
    resetButtonView.textContent = 'Reset';

    outputView.appendChild(descriptionView);
    outputView.appendChild(totalAverageCounterView);
    outputView.appendChild(timeChunkAverageCounterView);
    outputView.appendChild(textareaView);
    outputView.appendChild(resetButtonView);

    const controller = getController();
    controller.handleReset(resetButtonView, textareaView);
    controller.handleCounters(
        textareaView,
        totalAverageCounterView,
        timeChunkAverageCounterView
    );

    return outputView;
}

// Controller layer
const controllerSingleton =  (function () {
    return {
        handleCounters: function (textarea, totalAverageView, timeChunkAverageView) {
            const totalAverageCounter = totalAverageView.getElementsByTagName('strong')[0];
            const timeChunckAverageCounter = timeChunkAverageView.getElementsByTagName('strong')[0];

            textarea.addEventListener('keyup', startTimer);
            textarea.addEventListener('keyup',  () => { updateCounters(textarea, totalAverageCounter, timeChunckAverageCounter) });
        },
        handleReset: function (button, textarea) {
            button.addEventListener('click', () => {
                textarea.value = '';
            });
        }
    }
})();

function getController() {
    return controllerSingleton;
}

function updateCounters(textarea, totalAverageCounter, timeChunckAverageCounter) {
    totalAverageCounter.textContent = textarea.value.length;
    timeChunckAverageCounter.textContent = textarea.value.length;
}

function startTimer(event) {
    event.target.removeEventListener(event.type, startTimer);
    timeLoop(event.target);
}

async function timeLoop(textarea) {
    for (let index = 0; index < 1000 && textarea.value.length > 0; index++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('tic, chars: ' + textarea.value.length);
                resolve();
            }, 500);
        });
    }

    textarea.addEventListener('keyup', startTimer);
}

    // if (isEnabled) {
    //     console.log('on');
    //     textarea.removeEventListener('keyup', timeLoop(textarea, true));
    // }
    // else {
    //     console.log('off');
    //     textarea.addEventListener('keyup', timeLoop(textarea, true));
    // }
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve("total chars: " + numChars);
    //     }, 1000);
    // });
