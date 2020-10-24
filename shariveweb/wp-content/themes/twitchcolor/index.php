<?php get_header() ?>
<div class="position-relative overflow-hidden posts-view">
    <div class="pt-xl-8 pt-lg-6 pt-md-5 pt-4 pb-xl-8 pb-lg-6 pb-md-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="h2 mb-xl-4 mb-lg-4 mb-md-3 mb-3  text-uppercase font-weight-bold mb-4">Latest Blog</div>
                </div>
            </div>
            <div class="row">
            <?php
            if( have_posts() ) {
                while ( have_posts() ) {
                    the_post();
                    get_template_part( "template-parts/content", "archive");
                }
            }
            ?>
            </div>
        </div>
    </div>
</div>
<?php get_footer() ?>