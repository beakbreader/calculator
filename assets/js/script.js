
function searchFunction() {
  let input = document.getElementById('search').value.toLowerCase();
  let mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '<p>Search results for: ' + input + '</p>';
}
