// composables/useCounter.js
export default () => {
  const counter = ref(0);
  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  const counterDouble = computed(() => counter.value * 2);
  return {
    counter,
    increment,
    decrement,
    counterDouble,
  };
};
