<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);
</script>

<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h2><i class="fas fa-question-circle"></i> Game Help</h2>
        <button class="close-button" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="modal-body">
        <h3>How to Play</h3>
        <p>Welcome to Mystical Escape, a text-based adventure game! Here's how to play:</p>
        
        <div class="help-section">
          <h4><i class="fas fa-book-open"></i> Story</h4>
          <p>Read the story text to understand your current situation and surroundings.</p>
        </div>
        
        <div class="help-section">
          <h4><i class="fas fa-mouse-pointer"></i> Choices</h4>
          <p>Click on the choices below the story to decide what to do next. Your choices will affect how the story unfolds.</p>
        </div>
        
        <div class="help-section">
          <h4><i class="fas fa-briefcase"></i> Inventory</h4>
          <p>Items you collect will appear in your inventory. Some items may be needed to progress in the game.</p>
        </div>
        
        <div class="help-section">
          <h4><i class="fas fa-save"></i> Saving Your Game</h4>
          <p>Click the "Save Game" button to save your progress. You can close the browser and return later to continue from where you left off.</p>
        </div>
        
        <div class="help-section">
          <h4><i class="fas fa-redo-alt"></i> Resetting</h4>
          <p>If you want to start over, click the "Reset Game" button. Be careful, as this will erase your current progress!</p>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="primary-button" @click="$emit('close')">Got it!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: var(--background-color);
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
  animation: slideIn 0.3s ease;
}

.modal-header {
  background-color: var(--background-lighter);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  color: var(--secondary-color);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.modal-header h2 i {
  margin-right: 10px;
}

.close-button {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: var(--danger-color);
}

.modal-body {
  padding: 20px;
  color: var(--text-color);
}

.modal-body h3 {
  color: var(--primary-color);
  margin-top: 0;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.help-section {
  margin-bottom: 20px;
}

.help-section h4 {
  color: var(--accent-color);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.help-section h4 i {
  margin-right: 8px;
}

.help-section p {
  margin-top: 5px;
  line-height: 1.5;
}

.modal-footer {
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--border-color);
  background-color: var(--background-lighter);
}

.primary-button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-button:hover {
  background-color: #1670a7;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.primary-button:active {
  transform: translateY(0);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Scrollbar styling */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: var(--background-color);
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-muted);
}
</style>
