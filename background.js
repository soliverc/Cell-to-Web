function openTabsWithDelay(rows, delay) {
    let index = 0;

    function openNextTab() {
        if (index < rows.length) {
            chrome.tabs.create({ url: `https://www.google.com/search?q=${encodeURIComponent(rows[index])}` });
            index++;
            setTimeout(openNextTab, delay); // Set delay before opening next tab
        }
    }

    openNextTab(); // Start the process
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.excelData) {
        let rows = message.excelData.split('\n');
        openTabsWithDelay(rows, 500); // 500 milliseconds delay (0.5 seconds)
    }
});