<div class="col-xl-4 col-lg-4 col-md-6">
	<div class="card mb-xl-0 mb-lg-4 mb-md-2 mb-1 border-0 rounded-0">
		<img src="<?=the_post_thumbnail_url("medium") ?>" class="img-fluid" alt="...">
		<div class="card-body px-0">
			<a class="card-title h4" href="<?= the_permalink() ?>"><?= the_title() ?></a>
			<div class="card-text">
				<?= wp_trim_words(get_the_content(),30,"...") ?>
				<a href="<?= the_permalink() ?>">Read more</a>
			</div>
		</div>
	</div>
</div>
            