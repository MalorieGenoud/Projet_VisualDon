$(window).on("popstate", evt => {
    let hash = window.location.hash;
    let page = $(hash);
    $("main>section").hide();
    page.show();
    $("#wrapper>nav li").removeClass("selected previous");
    $(`#wrapper>nav [href="${hash}"]`)
        .parent().addClass("selected")
        .prev().addClass("previous");
})

// simule un changement dans l'url
$(window).trigger("popstate");
