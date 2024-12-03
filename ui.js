// ui.js
const codeInput = document.getElementById('codeInput');
const processButton = document.getElementById('processButton');

processButton.onclick = () => {
    const highlightedCode = Prism.highlight(codeInput.value, Prism.languages.json, 'json');
    parent.postMessage({ pluginMessage: { type: 'process-code', code: highlightedCode } }, '*');
  };