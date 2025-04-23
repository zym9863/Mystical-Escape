<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  choices: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['choice-selected']);

function selectChoice(choice) {
  emit('choice-selected', choice);
}
</script>

<template>
  <div class="choice-list">
    <div class="choice-header">
      <i class="fas fa-route icon icon-secondary"></i>
      <h2>Your Choices</h2>
    </div>
    <div class="choice-buttons">
      <button
        v-for="(choice, index) in choices"
        :key="index"
        class="choice-button"
        @click="selectChoice(choice)"
      >
        <i class="fas fa-chevron-right icon"></i>
        <span>{{ choice.text }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.choice-list {
  background-color: var(--background-light);
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 8px var(--shadow-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.choice-list:hover {
  box-shadow: 0 6px 12px var(--shadow-color);
}

.choice-header {
  background-color: var(--background-lighter);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.choice-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--secondary-color);
  font-weight: 600;
}

.choice-header i {
  margin-right: 10px;
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.choice-buttons {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
}

.choice-button {
  background-color: var(--background-lighter);
  color: var(--text-color);
  border: none;
  border-radius: 6px;
  padding: 14px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.choice-button i {
  margin-right: 10px;
  color: var(--secondary-color);
  transition: transform 0.3s ease;
}

.choice-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.choice-button:hover i {
  transform: translateX(3px);
  color: var(--text-color);
}

.choice-button:active {
  background-color: var(--primary-color);
  transform: translateY(0);
}

/* Add a subtle ripple effect */
.choice-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.choice-button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0) translate(-50%, -50%);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
