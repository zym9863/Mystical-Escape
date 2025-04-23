# Mystical Escape - A Text Adventure Game

[English](README.md) | [中文](README_zh.md)

Mystical Escape is an interactive text-based adventure game built with Vue 3 and Vite. Players navigate through a mysterious story by making choices that affect the outcome of their adventure.

## Features

- **Immersive Storytelling**: Engage with a mysterious narrative about escaping from a tower
- **Choice-Based Gameplay**: Make decisions that affect the story's progression
- **Inventory System**: Collect and use items throughout your journey
- **Save Game Functionality**: Save your progress and continue later
- **Help System**: Access game instructions through an interactive help modal
- **Responsive Design**: Enjoy the game on both desktop and mobile devices

## Game Controls

- **Reset Game**: Start the adventure from the beginning
- **Save Game**: Save your current progress to continue later
- **Help**: View game instructions and tips

## Story

You wake up in a mysterious tower with no memory of how you got there. Explore your surroundings, collect items, and make choices to find your way to freedom. Will you discover the secrets of the tower and escape, or will you remain trapped forever?

## Technical Details

The game is built using:
- Vue 3 Composition API
- Vite build tool
- Local storage for game saving
- Reactive state management
- Component-based architecture

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Game Structure

- `GameEngine.js`: Core game logic and state management
- `StoryData.js`: Story content, scenes, and choices
- `GameView.vue`: Main game interface
- `StoryDisplay.vue`: Displays the current scene text
- `ChoiceList.vue`: Renders available choices
- `InventoryView.vue`: Shows collected items
- `GameControls.vue`: Game control buttons
- `HelpModal.vue`: Help instructions modal

## Future Enhancements

- Multiple save slots
- More story branches and endings
- Sound effects and background music
- Achievements system
- Visual themes and accessibility options
