<script lang="ts">
    let people = [
        {
            id: 1,
            name: "Shelma",
            job: "Ibu Rumah Tangga",
        },
        {
            id: 2,
            name: "Shabil",
            job: "Anak sekolahan",
        },
    ];
</script>

<main>
    {#each  people as person (person.id)}
        <div>
            <h2>#{person.id} {person.name}</h2>
            <div>{person.job}</div>
        </div>
    {:else}
        <div>No data to show...</div>
    {/each}
</main>
