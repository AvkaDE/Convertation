<template>
  <div class="dropdown-wrapper" @click.stop.prevent="toggleList">
    <span>{{ shownText?.toUpperCase() }}</span>
    <div class="open-indicator" :class="{ opened: isOpen }"></div>
    <div v-show="isOpen" class="options-list">
      <div
        v-for="item in data"
        class="option-item"
        @click="changeSelection(item.value)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";

const props = defineProps({
  shownText: String,
  data: Array as PropType<{ title: string; value: string }[]>,
});
const model = defineModel();

const isOpen = ref(false);

const changeSelection = (e) => {
  model.value = e;
};

const toggleList = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;

  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--text-color-primary);

  cursor: pointer;

  height: 100%;

  .open-indicator {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid var(--text-color-primary);

    transition: border 0.5s;

    &.opened {
      border-top: unset;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;

      border-bottom: 5px solid var(--text-color-primary);
    }
  }

  .options-list {
    position: absolute;
    bottom: -85px;
    left: 0;
    z-index: 10;

    width: 100%;
    padding: 8px;

    border-radius: 8px;
    border: 1px solid var(--text-color-primary);

    background: var(--bg-color-light);

    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
