<script setup>
import { defineEmits } from 'vue';
import gameEngine from '../game/GameEngine';

const emit = defineEmits(['reset-game', 'save-game', 'show-help']);

function resetGame() {
  if (confirm('Are you sure you want to reset the game? All progress will be lost.')) {
    emit('reset-game');
  }
}

function saveGame() {
  emit('save-game');
}

function showHelp() {
  emit('show-help');
}
</script>

<template>
  <div class="game-controls">
    <div class="controls-header">
      <i class="fas fa-gamepad icon icon-danger"></i>
      <h3>Game Controls</h3>
    </div>
    <div class="controls-content">
      <button @click="resetGame" class="control-button reset">
        <i class="fas fa-redo-alt"></i>
        <span>Reset Game</span>
      </button>
      <button @click="saveGame" class="control-button save">
        <i class="fas fa-save"></i>
        <span>Save Game</span>
      </button>
      <button @click="showHelp" class="control-button help">
        <i class="fas fa-question-circle"></i>
        <span>Help</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-controls {
  background-color: var(--background-light);
  border-radius: 10px;
  color: var(--text-color);
  box-shadow: 0 4px 8px var(--shadow-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.game-controls:hover {
  box-shadow: 0 6px 12px var(--shadow-color);
}

.controls-header {
  background-color: var(--background-lighter);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.controls-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--danger-color);
  font-weight: 600;
}

.controls-header i {
  margin-right: 10px;
  color: var(--danger-color);
  font-size: 1.1rem;
}

.controls-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.control-button {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-button i {
  margin-right: 8px;
}

.reset {
  background-color: var(--danger-color);
  color: white;
}

.reset:hover {
  background-color: #e74c3c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.save {
  background-color: var(--accent-color);
  color: var(--background-color);
}

.save:hover {
  background-color: #7ab922;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.help {
  background-color: var(--secondary-color);
  color: white;
}

.help:hover {
  background-color: #1670a7;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.control-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
