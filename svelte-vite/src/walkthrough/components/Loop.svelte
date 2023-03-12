<script lang="ts">
    import Modal from "./Modal.svelte";
    let showModal = false;
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
    let peopleCount = people[people.length-1].id;

    const toggleModal = () => {
        showModal = !showModal;
    };
    const remove = (id) => {
        people = people.filter((person) => person.id != id);
    };
    const addNewPersonData = (event) => {
        peopleCount += 1;
        event.detail.id = peopleCount
        people = [event.detail, ...people];
    };
</script>

<main>
    {#if people.length > 0}
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
    {:else}
        <div>No data...</div>
    {/if}
</main>
<Modal
    message="& get 10% discount"
    {showModal}
    isPromo={true}
    closeModal={toggleModal}
    on:newPersonData={addNewPersonData}
/>
<button on:click={toggleModal}>Show Modal</button>
