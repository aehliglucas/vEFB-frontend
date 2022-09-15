// Rendering UTC time in top bar
function render_top_bar_time() {
    d = new Date();
    let hours = ("0" + String(d.getUTCHours())).slice(-2);
    let minutes = ("0" + String(d.getUTCMinutes())).slice(-2);
    document.getElementById('top-bar-time').innerText = "UTC  " + hours + " " + minutes
}

// Rendering welcome message in top bar 
function render_top_bar_welcome() {
    firstname = "Lucas"
    const baseDiv = document.getElementById('topbar-welcome')
    const element = document.createElement('p')
    element.className = "top-bar-text"
    element.id = "top-bar-welcome"
    element.innerHTML = "Welcome, <strong>" + firstname + "</strong>!"
    baseDiv.appendChild(element)
}



// Functions that should be executed when the window is fully loaded
window.onload = function() {
    render_top_bar_time();
    setInterval(render_top_bar_time, 5000);
    render_top_bar_welcome()
}