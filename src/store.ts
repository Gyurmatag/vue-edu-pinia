import { defineStore } from 'pinia';

export const useGreetingsStore = defineStore({
  id: 'greetings',
  state: () => ({
    greetings: []
  }),
  actions: {
    addGreeting(greeting: string) {
      this.greetings.push(greeting);
    }
  }
});