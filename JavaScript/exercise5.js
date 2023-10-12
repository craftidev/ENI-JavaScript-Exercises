// Main entry of the feature
export default function exercise5() {
    // Views
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

    descriptionView.textContent = ('The calculations start when you enter your first character.');
    totalAverageCounterView.textContent = ('Total average: ');
    timeChunkAverageCounterView.textContent = ('Time chunk average: ');
    resetButtonView.textContent = ('Reset');

    outputView.appendChild(descriptionView);
    outputView.appendChild(totalAverageCounterView);
    outputView.appendChild(timeChunkAverageCounterView);
    outputView.appendChild(textareaView);
    outputView.appendChild(resetButtonView);

    return outputView;
}