<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    let name;
    let job;
    let skills = [];
    let age;
    const handleSubmit = () => {
        let skill = skills.length ? skills.join(", ") : "no skill";
        const person = {
            id:Math.random(),
            name,
            job,
            skill,
            age,
        };
        dispatch("addPerson", person);
    };
</script>

<slot name="title" />
<form on:submit|preventDefault={handleSubmit}>
    <label>Name</label>
    <div><input type="text" bind:value={name} /></div>
    <label> Job </label>
    <div>
        <select bind:value={job}>
            <option value="Support">Support</option>
            <option value="Carry">Carry</option>
            <option value="Tanker">Tanker</option>
        </select>
    </div>
    <label>Skills</label>
    <div>
        <input
            type="checkbox"
            name=""
            id=""
            bind:group={skills}
            value="Skill 1"
        />
        Skill 1 <br />
        <input
            type="checkbox"
            name=""
            id=""
            bind:group={skills}
            value="Skill 2"
        />
        Skill 2 <br />
        <input
            type="checkbox"
            name=""
            id=""
            bind:group={skills}
            value="Skill 3"
        />
        Skill 3 <br />
    </div>
    <label>Age</label>
    <div><input type="number" size="5" bind:value={age} /></div>
    <button>Submit</button>
</form>
