<script lang="ts">
    export let newData;
    let people = [
        {
            id: 1,
            name: "Shelma",
            job: "Ibu Rumah Tangga",
            age: 1,
            skill: "a",
        },
        {
            id: 2,
            name: "Shabil",
            job: "Anak sekolahan",
            age: 1,
            skill: "a",
        },
    ];

    const remove = (id) => {
        people = people.filter((person) => person.id != id);
    };
    const removeNewData = (id) => {
        newData = newData.filter((newData) => newData.id != id);
    };
</script>

<main>
    {#if people.length > 0 || newData.length > 0}
        {#each people as person}
            <div>
                <strong>{person.id}</strong>
                <strong>{person.name}</strong>
                <div>{person.job}</div>
                <div>{person.skill}</div>
                <div>{person.age} years old</div>
                <div>
                    <button
                        on:click={() => {
                            remove(person.id);
                        }}>Delete</button
                    >
                </div>
            </div>
        {/each}

        {#each newData as person}
            <div>
                <strong>{person.id}</strong>
                <strong>{person.name}</strong>
                <div>{person.job}</div>
                <div>{person.skill}</div>
                <div>{person.age} years old</div>
                <div>
                    <button
                        on:click={() => {
                            removeNewData(person.id);
                        }}>Delete</button
                    >
                </div>
            </div>
        {/each}

    {:else}
        <div>No data...</div>
    {/if}
</main>
