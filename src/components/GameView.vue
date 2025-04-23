<script setup>
import { ref, computed, onMounted } from 'vue';
import StoryDisplay from './StoryDisplay.vue';
import ChoiceList from './ChoiceList.vue';
import InventoryView from './InventoryView.vue';
import GameControls from './GameControls.vue';
import HelpModal from './HelpModal.vue';
import gameEngine from '../game/GameEngine';

// Reactive references to game state
const currentScene = ref(gameEngine.getCurrentScene());
const availableChoices = ref(gameEngine.getAvailableChoices());
const inventory = computed(() => gameEngine.gameState.inventory);
const gameMessage = ref('');
const isHelpModalVisible = ref(false);

// Handle player choice selection
function handleChoiceSelected(choice) {
  currentScene.value = gameEngine.makeChoice(choice);
  availableChoices.value = gameEngine.getAvailableChoices();

  // Clear any previous messages
  gameMessage.value = '';
}

// Game control function
function handleResetGame() {
  currentScene.value = gameEngine.resetGame();
  availableChoices.value = gameEngine.getAvailableChoices();
  gameMessage.value = 'Game reset successfully!';

  // Clear message after 3 seconds
  setTimeout(() => {
    gameMessage.value = '';
  }, 3000);
}

// Handle save game
function handleSaveGame() {
  const success = gameEngine.saveGame();
  if (success) {
    gameMessage.value = 'Game saved successfully!';
  } else {
    gameMessage.value = 'Failed to save game. Please try again.';
  }

  // Clear message after 3 seconds
  setTimeout(() => {
    gameMessage.value = '';
  }, 3000);
}

// Handle show help
function handleShowHelp() {
  isHelpModalVisible.value = true;
}

// Handle close help modal
function handleCloseHelp() {
  isHelpModalVisible.value = false;
}

// Initialize game on component mount
onMounted(() => {
  // Try to load saved game if it exists
  if (gameEngine.hasSavedGame()) {
    const loadSuccess = gameEngine.loadGame();
    if (loadSuccess) {
      currentScene.value = gameEngine.getCurrentScene();
      availableChoices.value = gameEngine.getAvailableChoices();
      gameMessage.value = 'Saved game loaded successfully!';

      // Clear message after 3 seconds
      setTimeout(() => {
        gameMessage.value = '';
      }, 3000);
    }
  } else {
    // Initialize with default state
    currentScene.value = gameEngine.getCurrentScene();
    availableChoices.value = gameEngine.getAvailableChoices();
  }
});
</script>

<template>
  <div class="game-view">
    <header class="game-header">
      <h1><i class="fas fa-book-open icon icon-lg"></i> Mystical Escape</h1>
      <div class="game-subtitle">A Text Adventure</div>
    </header>

    <div v-if="gameMessage" class="game-message">
      <i class="fas fa-info-circle icon"></i> {{ gameMessage }}
    </div>

    <div class="game-content">
      <StoryDisplay :text="currentScene.text" />

      <ChoiceList
        :choices="availableChoices"
        @choice-selected="handleChoiceSelected"
      />
    </div>

    <div class="game-sidebar">
      <InventoryView :inventory="inventory" />

      <GameControls
        @reset-game="handleResetGame"
        @save-game="handleSaveGame"
        @show-help="handleShowHelp"
      />
    </div>
  </div>

  <!-- Help Modal -->
  <HelpModal
    :is-visible="isHelpModalVisible"
    @close="handleCloseHelp"
  />
</template>

<style scoped>
.game-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header header"
    "message message"
    "content sidebar";
  gap: 20px;
}

.game-header {
  grid-area: header;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

h1 {
  color: var(--primary-color);
  font-size: 2.8rem;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px var(--shadow-color);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 i {
  margin-right: 15px;
  color: var(--accent-color);
}

.game-subtitle {
  color: var(--text-muted);
  font-size: 1.2rem;
  font-style: italic;
}

.game-message {
  grid-area: message;
  background-color: var(--accent-color);
  color: var(--background-color);
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bold;
  box-shadow: 0 2px 4px var(--shadow-color);
  animation: slideDown 0.4s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-message i {
  margin-right: 8px;
  font-size: 1.2em;
}

.game-content {
  grid-area: content;
}

.game-sidebar {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .game-view {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "message"
      "content"
      "sidebar";
  }
}
</style>
