<script setup>
async function mailTest() {
  await $fetch("api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
</script>

<template>
  <div>
    Nuxt module playground!
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="mailTest"
    >
      Click me
    </button>
  </div>
</template>
