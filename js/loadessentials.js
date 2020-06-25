window.onload = () => {

    let url = window.location.href;

    if (url.match(/index/) || url.match(/^((?!html).)*$/)) {


        loadNavIndex();

    }

    else {

        loadNav();

    }
    loadFooter();


}

function loadNavIndex() {
    let pageNav = document.querySelector('#page-nav');
    pageNav.innerHTML = `
    <button type="button" data-uk-toggle="target: .navbar-collapse; cls: hidden-up-to-s" class="uk-navbar-toggle uk-hidden@s" data-uk-navbar-toggle-icon></button>
                <div class="uk-navbar-left" >
                <div class="navbar-collapse hidden-up-to-s uk-navbar-right" >
                   
                        <ul data-uk-toggle="media: @s; cls: uk-navbar-nav uk-padding-remove; mode: media" class="uk-nav uk-nav-primary uk-padding-small">
                            <li class="uk-active"><a href="index.html">Home</a></li>
                            <li>
                                <a href="#">Talleres</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href=html/taller1.html>Taller 1: escritura creativa</a></li>
                                        <li><a href="html/taller2.html">Taller 2: lenguaje inclusivo</a></li>
                                        <li><a href="html/otaller.html">Taller 3: organiza un taller</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="html/acercade.html">Sobre Mot</a></li>
                            <li><a href="html/contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
    `;
}

function loadNav() {
    let pageNav = document.querySelector('#page-nav');
    pageNav.innerHTML = `
    <button type="button" data-uk-toggle="target: .navbar-collapse; cls: hidden-up-to-s" class="uk-navbar-toggle uk-hidden@s" data-uk-navbar-toggle-icon></button>
                <div class="uk-navbar-left" >
                <div class="navbar-collapse hidden-up-to-s uk-navbar-right" >
                   
                        <ul data-uk-toggle="media: @s; cls: uk-navbar-nav uk-padding-remove; mode: media" class="uk-nav uk-nav-primary uk-padding-small">
                            <li class="uk-active"><a href="../index.html">Home</a></li>
                            <li>
                                <a href="#">Talleres</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href=taller1.html>Taller 1: escritura creativa</a></li>
                                        <li><a href="taller2.html">Taller 2: lenguaje inclusivo</a></li>
                                        <li><a href="otaller.html">Taller 3: organiza un taller</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="acercade.html">Sobre Mot</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
    `;
}

function loadFooter() {
    let pageNav = document.querySelector('#page-footer');
    pageNav.innerHTML = "<div class='uk-container uk-padding-small'>"
        + "<p class='uk-text-small uk-text-center'>by <a href='https://uniproyect.com' target='blank'>Uniproyect</a></p>"
        + "</div>";


}