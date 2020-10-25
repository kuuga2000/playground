<?php get_header() ?>
<div class="bg-yellow-light position-relative post-view" tabindex="-1" style="outline: currentcolor none medium;">
    <div class="pt-xl-4 pt-lg-3 pt-md-3 pt-3 pb-xl-8 pb-lg-6 pb-md-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-10 offset-1">
                    <div class="h2 mb-xl-4 mb-lg-4 mb-md-3 mb-3 font-weight-bolder text-uppercase">&nbsp;</div>
                    <div class="post-date">
                        <span><?= the_date() ?></span>
                    </div>
                    <h1><?= get_the_title() ?></h1>
                    <?php
                    the_content();
                    ?>
                    <div class="post-tags">
                        <?= the_tags() ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>alter_nav_link("nav-link");</script>
<?php get_footer() ?>