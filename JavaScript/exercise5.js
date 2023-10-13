const timeChunkLengthInMilliseconds = 5000;

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
    controller.setCounters(totalAverageCounterView, timeChunkAverageCounterView);
    controller.handleReset(resetButtonView, textareaView);
    controller.handleCounters(textareaView);

    return outputView;
}

// Controller layer
const controllerSingleton =  (function () {
    let totalAverageCounter;
    let timeChunkAverageCounter;

    return {
        handleCounters: function (textarea) {
            textarea.addEventListener('keyup', startTimer);
        },
        handleReset: function (button, textarea) {
            button.addEventListener('click', () => {
                textarea.value = '';
            });
        },
        setCounters: function (totalAverage, timeChunkAverage) {
            totalAverageCounter = totalAverage.getElementsByTagName('strong')[0];
            timeChunkAverageCounter = timeChunkAverage.getElementsByTagName('strong')[0];
        },
        getCounters: function () {
            return {
                totalAverageCounter: totalAverageCounter,
                timeChunkAverageCounter: timeChunkAverageCounter
            };
        }
    }
})();

function getController() {
    return controllerSingleton;
}

function startTimer(event) {
    const counters = controllerSingleton.getCounters();

    event.target.removeEventListener(event.type, startTimer);
    timeLoop(event.target, counters.totalAverageCounter, counters.timeChunkAverageCounter);
}

async function timeLoop(textarea, totalAverageCounter, timeChunckAverageCounter) {
    const startingTimeStamp = Date.now();

    try {
        while (textarea.value.length > 0) {
            const startingTimeStampChunk = Date.now();
            const numberOfCharactersAtStartOfChunk = textarea.value.length;
    
            await new Promise((resolve) => {
                setTimeout(() => {
                    if (textarea.value.length > 0) {
                        const timeElapsedTotalInSeconds = (Date.now() - startingTimeStamp) / 1000;
                        const timeElapsedChunkInSeconds = (Date.now() - startingTimeStampChunk) / 1000;

                        totalAverageCounter.textContent = (textarea.value.length / timeElapsedTotalInSeconds).toFixed(2);
                        timeChunckAverageCounter.textContent = (
                            (textarea.value.length - numberOfCharactersAtStartOfChunk) /
                            timeElapsedChunkInSeconds
                        ).toFixed(2);
                    }

                    resolve();
                }, timeChunkLengthInMilliseconds);
            });
        }

        textarea.addEventListener('keyup', startTimer);
    }

    catch (error) {
        console.error(error.message);
    }
}
