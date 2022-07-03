const btn = $('#hide');
const p = $('#text');
btn.click(() => {
    p.fadeToggle(300);

    // if (p.css({ 'display': 'none' })) {
    //     btn.text('show');
    // }
    // else {
    //     btn.text('hide');
    // }
});
