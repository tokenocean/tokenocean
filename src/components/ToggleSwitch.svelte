<script>
  export let id;
  export let label;
  export let checked = false;
</script>

<div class="relative inline-block w-10 mr-2 align-middle select-none ease-in">
  <input
    type="checkbox"
    name="toggle"
    {id}
    class="toggle-checkbox absolute p-0 block w-6 h-6 rounded-full bg-gray-300 border-4 border-gray-300 appearance-none cursor-pointer outline-none"
    bind:checked
    on:change
  />
  <label
    for={id}
    class="toggle-label block overflow-hidden h-6 rounded-full bg-offblack cursor-pointer"
  />
</div>
<label for={id} class="cursor-pointer">{label}</label>

<style>
  .toggle-checkbox:checked {
    @apply right-0;
    border: 1px solid #0cf574;
    right: 0;
  }
  .toggle-checkbox:checked + .toggle-label {
    background: #0cf574;
  }
</style>
