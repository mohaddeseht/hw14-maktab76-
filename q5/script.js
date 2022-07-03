$(document).ready(function () {
    $('button').click(() => {
        $.ajax({
            url: 'https://62c04547d40d6ec55ccdca6a.mockapi.io/user'
        }).done((users) => {
            $.each(users, function (index, user) {
                $('tbody').append(
                    `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.lastName}</td></tr>`
                )
            })
        });
    });

});