<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  inventory: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="inventory-view">
    <div class="inventory-header">
      <i class="fas fa-briefcase icon icon-neutral"></i>
      <h3>Inventory</h3>
    </div>
    <div class="inventory-content">
      <ul v-if="inventory.length > 0" class="inventory-list">
        <li v-for="(item, index) in inventory" :key="index" class="inventory-item">
          <i class="fas" :class="getItemIcon(item)"></i>
          <span>{{ item }}</span>
        </li>
      </ul>
      <div v-else class="empty-inventory">
        <i class="fas fa-box-open"></i>
        <p>Your inventory is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inventory: {
      type: Array,
      required: true
    }
  },
  methods: {
    getItemIcon(item) {
      // Map items to appropriate Font Awesome icons
      const iconMap = {
        'brass key': 'fa-key',
        'mysterious note': 'fa-scroll',
        'torch': 'fa-fire',
        'coin': 'fa-coins',
        'potion': 'fa-flask',
        'map': 'fa-map',
        'book': 'fa-book',
        'sword': 'fa-sword',
        'shield': 'fa-shield-alt',
        'food': 'fa-apple-alt'
      };

      // Check if the item name contains any of the keys in the iconMap
      for (const [key, icon] of Object.entries(iconMap)) {
        if (item.toLowerCase().includes(key)) {
          return icon;
        }
      }

      // Default icon if no match is found
      return 'fa-circle';
    }
  }
};
</script>

<style scoped>
.inventory-view {
  background-color: var(--background-light);
  border-radius: 10px;
  color: var(--text-color);
  box-shadow: 0 4px 8px var(--shadow-color);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.inventory-view:hover {
  box-shadow: 0 6px 12px var(--shadow-color);
}

.inventory-header {
  background-color: var(--background-lighter);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.inventory-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--neutral-color);
  font-weight: 600;
}

.inventory-header i {
  margin-right: 10px;
  color: var(--neutral-color);
  font-size: 1.1rem;
}

.inventory-content {
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
}

.inventory-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.inventory-item {
  padding: 8px 10px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
}

.inventory-item:hover {
  background-color: var(--background-lighter);
}

.inventory-item:last-child {
  border-bottom: none;
}

.inventory-item i {
  margin-right: 10px;
  color: var(--neutral-color);
  width: 20px;
  text-align: center;
}

.empty-inventory {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: var(--text-muted);
  text-align: center;
}

.empty-inventory i {
  font-size: 2rem;
  margin-bottom: 10px;
  opacity: 0.6;
}

.empty-inventory p {
  margin: 0;
  font-style: italic;
}

/* Custom scrollbar */
.inventory-content::-webkit-scrollbar {
  width: 6px;
}

.inventory-content::-webkit-scrollbar-track {
  background: var(--background-color);
  border-radius: 3px;
}

.inventory-content::-webkit-scrollbar-thumb {
  background: var(--neutral-color);
  border-radius: 3px;
}

.inventory-content::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}
</style>
