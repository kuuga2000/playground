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

    const remove = (id) => {
        people = people.filter((person) => person.id != id);
    };
</script>

<main>
    {#if people.length > 0}
        {#each people as person (person.id)}
            <div>
                <h2>#{person.id} {person.name}</h2>
                <div>{person.job}</div>
                <div>
                    <button
                        on:click={() => {
                            remove(person.id);
                        }}>Delete</button
                    >
                </div>
            </div>
        {:else}
            <div>No data to show...</div>
        {/each}
    {:else}
        <div>No data...</div>
    {/if}
</main>