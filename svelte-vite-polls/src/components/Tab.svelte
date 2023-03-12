<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={()=>dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
    }
    li {
        list-style: none;
        display: inline-block;
        width: 30%;
        cursor: pointer;
    }
    li > div {
        width: 100%;
        padding: 10px;
        border-bottom: solid 2px #ddd;
    }
    li:first-child {
        border-right: 0;
    }
</style>
