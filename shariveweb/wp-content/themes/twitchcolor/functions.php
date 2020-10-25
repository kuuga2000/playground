<?php

function twitchcolor_support() {
    add_theme_support("title-tag");
    add_theme_support("custom-logo");
    add_theme_support("post-thumbnails");
}

function twitchcolor_menus() {
    $locations = array (
        "primary" => "Primary Menu (Header)",
        "footer" => "Footer Menu"
    );
    register_nav_menus($locations);
}

function twitchcolor_styles() {
    $version = wp_get_theme()->get("Version");
    $styles = array(
        "/vendors/animate.css/animate.min.css",
        "/vendors/@fortawesome/fontawesome-free/css/all.min.css",
        "/assets/css/main.min.css",
        "/style.css"
    );
    foreach($styles as $index => $load_css) {
        $index++;
        wp_enqueue_style("loadcss{$index}", get_template_directory_uri(). $load_css, array(), $version, "all");
    }
}

function my_header_scripts() {
    echo "
    <script>
    function alter_nav_link(className) {
        var nav_link = document.getElementsByClassName(className);
        for (var i=0; i<nav_link.length; i++) {
            nav_link[i].href = \"/\" + nav_link[i].getAttribute(\"href\");
        }
    }
    </script>
    ";
}

function twitchcolor_javascripts() {
    $version = wp_get_theme()->get("Version");
    $javascripts = array(
        "/vendors/jquery/jquery.min.js",
        "/vendors/popper.js/umd/popper.min.js",
        "/vendors/bootstrap/js/bootstrap.min.js",
        "/vendors/isotope-layout/isotope.pkgd.min.js",
        "/vendors/jquery-circle-progress/circle-progress.min.js",
        "/vendors/smooth-scroll/smooth-scroll.polyfills.min.js",
        "/vendors/jquery-validation/jquery.validate.min.js",
        "https://maps.google.com/maps/api/js?sensor=false",
        "/assets/js/main.js"
    );

    foreach($javascripts as $index => $load_js) {
        $index++;
        wp_enqueue_script("loadjs{$index}", ($index == 8 ? $load_js : get_template_directory_uri(). $load_js), array(), $version, true);
    }
}

add_action("wp_enqueue_scripts", "twitchcolor_styles");
add_action('wp_head', 'my_header_scripts');
add_action("wp_enqueue_scripts", "twitchcolor_javascripts");
add_action("after_setup_theme", "twitchcolor_support");
add_action("init","twitchcolor_menus");