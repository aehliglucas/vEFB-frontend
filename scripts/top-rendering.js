menu_is_shown = false;

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

function show_menu() {
    return
}

function open_settings() {
    alert("Settings are work in progress...")
}

function show_context_menu() {
    menu = document.getElementById('menu-select')
    if(!menu_is_shown) {
        menu.style.display = "block";
        menu_is_shown = true;
    } else {
        menu.style.display = "none";
        menu_is_shown = false;
    }
}

// function make_menu_usable_on_mobile() {
//     document.getElementById('btn-settings').ontouchstart = function (e) {
//         alert("Menu is work in progress...")
//     }
// }

// Functions that should be executed when the window is fully loaded
window.onload = function() {
    render_top_bar_time();
    setInterval(render_top_bar_time, 1000);
    render_top_bar_welcome()
    // make_menu_usable_on_mobile()
}