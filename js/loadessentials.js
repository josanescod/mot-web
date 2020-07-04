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
    <nav class="uk-navbar-container uk-visible@m" uk-navbar="mode: click">                    
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="index.html">HOME</a></li>
                    <li>
                        <a href="#">TALLERES</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                  <li class="uk-active"><a href="html/taller1.html">Taller 1: escritura creativa</a></li>
                                  <li><a href="html/taller2.html">Taller 2: lenguaje inclusivo</a></li>
                                  <li><a href="html/otaller.html">Taller 3: organiza un taller</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="html/acercade.html">SOBRE MOT</a></li>
                    <li><a href="html/contacto.html">CONTACTO</a></li>
                    <li><a href="html/login.html">LOGIN</a></li>
                </ul>
            </div>
        </nav>
        <!-- boton oculto en tabletas o superior-->
        <button type="button" class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #menu_movil" data-uk-navbar-toggle-icon></button>      
        <div id="menu_movil" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar uk-hidden@m">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav> 
                <br>                
                    <li class="uk-nav-header uk-active"><a href="index.html" style="color:white">HOME</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header uk-parent">
                        <a href="#" style="color:white">Tallers</a>
                        <ul class="uk-nav-sub">
                          <li><a href="html/taller1.html" style="color:white">Taller 1 - escritura creativa</a></li>
                          <li><a href="html/taller2.html" style="color:white">Taller 2 - lenguaje inclusivo</a></li>
                          <li><a href="html/otaller.html" style="color:white">Taller 3 - organiza un taller</a></li>
                        </ul>
                      </li>
                      <hr class="uk-margin-small">
                    <li class="uk-nav-header" ><a href="html/acercade.html" style="color:white">SOBRE MOT</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header"><a href="html/contacto.html" style="color:white">CONTACTO</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header"><a href="html/login.html" style="color:white">LOGIN</a></li>
                    <hr class="uk-margin-small">                   
                </ul>  
                      
            </div>
        </div>
    `;
}

function loadNav() {
    let pageNav = document.querySelector('#page-nav');
    pageNav.innerHTML = `
    <nav class="uk-navbar-container uk-visible@m" uk-navbar="mode: click">                    
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="../index.html">HOME</a></li>
                    <li>
                        <a href="#">TALLERES</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                  <li class="uk-active"><a href="taller1.html">Taller 1: escritura creativa</a></li>
                                  <li><a href="taller2.html">Taller 2: lenguaje inclusivo</a></li>
                                  <li><a href="otaller.html">Taller 3: organiza un taller</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="acercade.html">SOBRE MOT</a></li>
                    <li><a href="contacto.html">CONTACTO</a></li>
                    <li><a href="login.html">LOGIN</a></li>
                </ul>
            </div>
        </nav>
        <!-- boton oculto en tabletas o superior-->
        <button type="button" class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #menu_movil" data-uk-navbar-toggle-icon></button>      
        <div id="menu_movil" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar uk-hidden@m">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav> 
                <br>               
                    <li class="uk-nav-header uk-active"><a href="../index.html" style="color:white;">HOME</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header uk-parent">
                        <a href="#" style="color:white;">Tallers</a>
                        <ul class="uk-nav-sub">
                          <li><a href="taller1.html" style="color:white">Taller 1 - escritura creativa</a></li>
                          <li><a href="taller2.html" style="color:white">Taller 2 - lenguaje inclusivo</a></li>
                          <li><a href="otaller.html" style="color:white">Taller 3 - organiza un taller</a></li>
                        </ul>
                      </li>
                      <hr class="uk-margin-small">
                    <li class="uk-nav-header" ><a href="acercade.html" style="color:white; ">SOBRE MOT</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header"><a href="contacto.html" style="color:white; ">CONTACTO</a></li>
                    <hr class="uk-margin-small">
                    <li class="uk-nav-header"><a href="login.html" style="color:white;">LOGIN</a></li>
                    <hr class="uk-margin-small">                   
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