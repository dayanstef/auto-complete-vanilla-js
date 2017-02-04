var input = document.querySelector('input');

/**
 * Simple function that matches the user input with data object,
 * builds list of matching countries based on the user input.
 *
 * @param val
 */
function loadCountries(val) {
    var $countries = document.getElementById("countries");

    $countries.innerHTML = '';

    for (var i = 0; i < countries.length; i++) {
        if (countries[i].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
            $countries.innerHTML += '<li>' + countries[i].name + '</li>';
        }
    }
}

/**
 * JavaScript KeyUp event for capturing user input
 *
 * @param e
 * @returns {Array}
 */
input.onkeyup = function (e) {
    if (this.value.length == 0 || e.keyCode == 27) {
        this.value = '';
    }

    return loadCountries(this.value);
};

/**
 * Init countries load
 *
 * @returns {Array}
 */
window.onload = function () {
    return loadCountries('');
};