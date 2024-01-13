chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.excelData) {
        let rows = message.excelData.split('\n');
        rows.forEach(row => {
            chrome.tabs.create({ url: `https://www.google.com/search?q=${encodeURIComponent(row)}` });
        });
    }
});

