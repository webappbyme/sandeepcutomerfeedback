// Function to show pages and hide others
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Perform validation or submit logic here if needed

    // Redirect to Thank You page (not included in this version)
    alert("Thank you for your feedback, " + name + "!");
});
