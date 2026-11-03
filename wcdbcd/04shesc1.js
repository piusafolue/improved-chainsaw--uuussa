/* kb */
if (navigator.keyboard) {
    navigator.keyboard.lock();
}
document.onkeydown = function(e) {
    return false;
};