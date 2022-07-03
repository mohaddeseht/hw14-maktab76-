$("button").click(() => {
    $("div").text($("form").serialize());
});