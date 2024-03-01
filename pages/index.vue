<script setup>
const testResult = ref("");
async function mailTest() {
  const res = await $fetch("api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  testResult.value = res;
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
    <iframe
      :srcdoc="testResult"
      frameborder="0"
      width="600"
      height="1024"
    ></iframe>
  </div>
</template>
