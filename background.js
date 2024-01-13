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
        openTabsWithDelay(rows, 3000); // 3000 milliseconds delay (3 seconds)
    }
});