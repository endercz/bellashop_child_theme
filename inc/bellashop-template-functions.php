<?php

/* Bellashop theme specific functions */
function add_topbar()
{
    ?>
    <div class="topbar">
      <div class="topbar-column">
        <a class="hidden-md-down" href="mailto:support@unishop.com"><i class="icon-mail"></i>&nbsp; support@unishop.com</a>
        <a class="hidden-md-down" href="tel:00331697720"><i class="icon-bell"></i>&nbsp; 00 33 169 7720</a>
        <a class="social-button sb-facebook shape-none sb-dark" href="#" target="_blank"><i class="socicon-facebook"></i></a>
        <a class="social-button sb-twitter shape-none sb-dark" href="#" target="_blank"><i class="socicon-twitter"></i></a>
        <a class="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i class="socicon-instagram"></i></a>
        <a class="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i class="socicon-pinterest"></i></a>
      </div>
      <div class="topbar-column">
        <a class="hidden-md-down" href="#">
            <i class="icon-download"></i>
            &nbsp; Get mobile app
        </a>
        <div class="lang-currency-switcher-wrap">
          <div class="lang-currency-switcher dropdown-toggle">
            <span class="language">
                <img alt="English" src="<?php bloginfo('stylesheet_directory'); ?>/img/flags/DE.png">
            </span>
            <span class="currency">CHF</span>
          </div>
          <div class="dropdown-menu">
            <div class="currency-select">
              <select class="form-control form-control-rounded form-control-sm">
                <option value="usd">EUR</option>
                <option value="usd">CZK</option>
              </select>
            </div>
            <a class="dropdown-item" href="#">
                <img src="<?php bloginfo('stylesheet_directory'); ?>/img/flags/GB.png" alt="English">Français
            </a>
            <a class="dropdown-item" href="#">
                <img src="<?php bloginfo('stylesheet_directory'); ?>/img/flags/DE.png" alt="Deutsch">Deutsch
            </a>
            <a class="dropdown-item" href="#">
                <img src="<?php bloginfo('stylesheet_directory'); ?>/img/flags/CZ.png" alt="Czech">Česky
            </a>
          </div>
        </div>
      </div>
    </div>
    <?php
}
