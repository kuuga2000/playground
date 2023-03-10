<script>
    let title ="Kamen Rider RX";
    const updateTitle = () => {
        title = "Kamen Rider Black RX"
    }
</script>
<div id="index" class="index">
    {title}
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur neque dolores nemo, cumque eius, ipsum numquam amet similique voluptate et sunt, odio deleniti provident. Maxime odit iste modi laboriosam.
    </p>
    <button on:click={updateTitle}>Change Title</button>
    <input type="text" name="" id="" bind:value={title}>
</div>
<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>