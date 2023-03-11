<script lang="ts">
    let name = "Minami Kotaro";
    let color = "red";
    $: colorName = `${color} ${name}`
    $: {
        console.log('===')
        console.log(colorName)
    }
    /*const textChange = (event) => {
        name = event.target.value;
    };*/
</script>

<p style="color: {color}">
    My Name is {colorName}
</p>
<!--
<input type="text" on:input={textChange} value={name} />
-->
<input type="text" bind:value={name}>
<input type="text" bind:value={color}>