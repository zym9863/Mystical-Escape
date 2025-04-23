<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="story-display">
    <div class="story-header">
      <i class="fas fa-scroll icon icon-accent"></i>
      <h2>Story</h2>
    </div>
    <div class="story-content">
      <p v-html="text.replace(/\n/g, '<br>')"></p>
    </div>
  </div>
</template>

<style scoped>
.story-display {
  background-color: var(--background-light);
  border-radius: 10px;
  margin-bottom: 20px;
  color: var(--text-color);
  box-shadow: 0 4px 8px var(--shadow-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.story-display:hover {
  box-shadow: 0 6px 12px var(--shadow-color);
}

.story-header {
  background-color: var(--background-lighter);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.story-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
}

.story-header i {
  margin-right: 10px;
  color: var(--accent-color);
  font-size: 1.1rem;
}

.story-content {
  padding: 20px;
  max-height: 300px;
  overflow-y: auto;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: left;
  position: relative;
}

.story-content p {
  margin: 0;
}

/* Custom scrollbar */
.story-content::-webkit-scrollbar {
  width: 8px;
}

.story-content::-webkit-scrollbar-track {
  background: var(--background-color);
  border-radius: 4px;
}

.story-content::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

.story-content::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}
</style>
