document.getElementById('googleBtn').addEventListener('click', () => {
    let data = document.getElementById('excelData').value;
    chrome.runtime.sendMessage({ excelData: data });
});
