import { reactive } from 'vue';
import { storyData, initialGameState } from '../data/StoryData';

// Constants for localStorage keys
const SAVE_GAME_KEY = 'mystical-escape-save';

/**
 * Game Engine class to manage game state and logic
 */
class GameEngine {
  constructor() {
    // Initialize game state as reactive to make it reactive in Vue components
    this.gameState = reactive({
      ...JSON.parse(JSON.stringify(initialGameState))
    });
  }

  /**
   * Get the current scene data
   * @returns {Object} The current scene object
   */
  getCurrentScene() {
    return storyData[this.gameState.currentScene];
  }

  /**
   * Get available choices for the current scene
   * @returns {Array} Array of available choices
   */
  getAvailableChoices() {
    const scene = this.getCurrentScene();
    if (!scene || !scene.choices) return [];

    return scene.choices.filter(choice => {
      // If there's no condition, the choice is always available
      if (!choice.condition) return true;

      // Otherwise, evaluate the condition with the current game state
      return choice.condition(this.gameState);
    });
  }

  /**
   * Make a choice and advance to the next scene
   * @param {Object} choice The choice object
   */
  makeChoice(choice) {
    // Apply any effects from the choice
    if (choice.effect) {
      choice.effect(this.gameState);
    }

    // Update current scene
    this.gameState.currentScene = choice.nextScene;

    // Add to visited scenes if not already visited
    if (!this.gameState.visitedScenes.includes(choice.nextScene)) {
      this.gameState.visitedScenes.push(choice.nextScene);
    }

    return this.getCurrentScene();
  }

  /**
   * Reset the game to initial state
   */
  resetGame() {
    Object.assign(this.gameState, JSON.parse(JSON.stringify(initialGameState)));
    return this.getCurrentScene();
  }

  /**
   * Save the current game state to localStorage
   * @returns {boolean} True if save was successful
   */
  saveGame() {
    try {
      // Create a non-reactive copy of the game state to save
      const saveData = JSON.parse(JSON.stringify(this.gameState));
      localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(saveData));
      return true;
    } catch (error) {
      console.error('Failed to save game:', error);
      return false;
    }
  }

  /**
   * Load a saved game from localStorage
   * @returns {boolean} True if load was successful
   */
  loadGame() {
    try {
      const savedGame = localStorage.getItem(SAVE_GAME_KEY);
      if (!savedGame) return false;

      const gameState = JSON.parse(savedGame);
      Object.assign(this.gameState, gameState);
      return true;
    } catch (error) {
      console.error('Failed to load game:', error);
      return false;
    }
  }

  /**
   * Check if a saved game exists
   * @returns {boolean} True if a saved game exists
   */
  hasSavedGame() {
    return localStorage.getItem(SAVE_GAME_KEY) !== null;
  }
}

// Create a singleton instance
const gameEngine = new GameEngine();

export default gameEngine;
