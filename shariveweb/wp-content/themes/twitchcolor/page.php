<?php get_header() ?>
<div class="bg-yellow-light position-relative overflow-hidden" tabindex="-1" style="outline: currentcolor none medium;">
    <div class="pt-xl-4 pt-lg-3 pt-md-3 pt-3 pb-xl-8 pb-lg-6 pb-md-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-10 offset-1 text-center">
                    <div class="h2 mb-xl-4 mb-lg-4 mb-md-3 mb-3 font-weight-bolder text-uppercase ">&nbsp;</div>
                    <div class="h2 mb-xl-4 mb-lg-4 mb-md-3 mb-3 font-weight-bolder text-uppercase "><?php the_title() ?></div>
                    <?php
                    the_content();
                    ?>
                </div>
            </div>
            <?php
            if(strtolower (get_the_title()) == strtolower("about me")) {
                $get_page = get_page_by_title("What I Do");
                if($get_page) { ?>
                <div class="row mt-xl-4 mt-lg-4 mt-md-3 mt-3">
                    <div class="col-12">
                        <div class="h2 mb-xl-4 mb-lg-4 mb-md-3 mb-3 font-weight-bolder text-uppercase"><?= $get_page->post_title ?></div>
                    </div>
                    <?= $get_page->post_content ?>
                </div>
            <?php
                }
            }
            ?>
        </div>
    </div>
</div>
<?php get_footer() ?>