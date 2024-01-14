function openTabsWithDelay(rows, delay) {
    let index = 0;

    function openNextTab() {
        if (index < rows.length) {
            let query = rows[index].trim(); // Trim whitespace from the row
            if (query) { // Check if the row is not empty
                chrome.tabs.create({ url: `https://www.google.com/search?q=${encodeURIComponent(query)}` ,  active:false});
            }
            index++;
            setTimeout(openNextTab, delay); // Set delay before opening next tab
        }
    }

    openNextTab(); // Start the process
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.excelData) {
        let rows = message.excelData.split('\n').filter(row => row.trim() !== ''); // Filter out empty rows
        openTabsWithDelay(rows, 1000); //  milliseconds delay 
    }
});
