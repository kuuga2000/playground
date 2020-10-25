function alter_nav_link(className) {
    var nav_link = document.getElementsByClassName(className);
    for (var i=0; i<nav_link.length; i++) {
        nav_link[i].href = "<?=get_site_url() ?>/" + nav_link[i].getAttribute("href");
    }
}