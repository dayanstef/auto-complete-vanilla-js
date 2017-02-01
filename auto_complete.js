var input = document.querySelector('input');

/**
 * Simple function that matches the user input with data object,
 * builds list of matching countries based on the user input.
 *
 * @param val
 * @returns {Array}
 */
function autoComplete(val) {
    var countries_list = [];

    for (var i = 0; i < countries.length; i++) {
        if (val.toLowerCase() === countries[i].name.toLowerCase().slice(0, val.length)) {
            countries_list.push(countries[i].name);
        }
    }

    return countries_list;
}

/**
 * Clear input filed and listed countries
 *
 * @param that
 * @param $countries
 */
function clear(that, $countries) {
    that.value = '';
    $countries.innerHTML = '';
}

/**
 * JavaScript KeyUp event for capturing user input
 *
 * @param e
 * @returns {*}
 */
input.onkeyup = function (e) {
    var value = this.value,
        $countries = document.getElementById("countries");

    if (value.length == 0 || e.keyCode == 27) {
        return clear(this, $countries);
    }

    $countries.innerHTML = '';
    var countries = autoComplete(value);

    for (var i = 0; i < countries.length; i++) {
        $countries.innerHTML += '<li>' + countries[i] + '</li>';
    }
};