// JavaScript function to switch tabs
function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    this.submit();
});
