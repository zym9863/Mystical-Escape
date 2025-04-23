<script setup>
import GameView from './components/GameView.vue'
</script>

<template>
  <div class="app">
    <GameView />
  </div>
</template>

<style>
/* Global styles */
:root {
  /* Main color palette */
  --primary-color: #6a4c93;       /* Purple - main theme color */
  --secondary-color: #1982c4;     /* Blue - secondary elements */
  --accent-color: #8ac926;        /* Green - highlights and accents */
  --danger-color: #ff595e;        /* Red - warnings and dangers */
  --neutral-color: #ffca3a;       /* Yellow - neutral elements */

  /* Text colors */
  --text-color: #f8f9fa;          /* Light text for dark backgrounds */
  --text-muted: #adb5bd;          /* Muted text for less important info */

  /* Background colors */
  --background-color: #0f111a;    /* Dark background - main */
  --background-light: #1a1d2e;    /* Slightly lighter background for cards */
  --background-lighter: #252a41;  /* Even lighter background for interactive elements */

  /* UI element colors */
  --border-color: #2e3559;        /* Border color for UI elements */
  --shadow-color: rgba(0, 0, 0, 0.5); /* Shadow color for depth */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Merriweather', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  background-image: linear-gradient(to bottom, var(--background-color), #131624);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  padding: 20px;
  background-color: transparent;
  position: relative;
}

/* Add a subtle pattern overlay */
.app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232e3559' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  z-index: -1;
}
</style>
