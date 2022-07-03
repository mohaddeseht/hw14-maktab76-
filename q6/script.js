const wrapper = $('.wrpper');
$('.btn').click(() => {
    $('.wrapper').prepend(
        `<div class="todo">${$('#input').val()}</div>`
    )
})