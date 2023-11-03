<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-96">
      <form @submit.prevent="addGreeting">
        <input
          v-model="name"
          name="name"
          placeholder="Your name"
          required
          class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
        />
        <button
          type="submit"
          class="mt-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Greeting
        </button>
      </form>
      <ul class="mt-4">
        <li
          v-for="(greeting, index) in greetings"
          :key="index"
          class="text-xl font-semibold text-gray-700"
        >
          {{ greeting }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGreetingsStore } from "./store";

const name = ref("traveler");
const { addGreeting: storeAddGreeting, greetings } = useGreetingsStore();

const addGreeting = () => {
  storeAddGreeting(`Greetings, ${name.value}!`);
};
</script>
