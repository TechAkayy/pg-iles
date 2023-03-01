<template>
  <button>
    <span style="display: flex"
      ><span style="align-self: center; font-size: 15px"
        ><slot>Click here</slot>
      </span>
      <slot name="suffix-icon" />
    </span>
  </button>
</template>
<style scoped>
  button {
    color: var(--color-text);
    background-color: var(--color-background);
    padding: 8px 24px;
    border-radius: 8px;
    border-color: var(--color-border);
  }
  button:hover {
    border-color: var(--color-border-hover);
  }
</style>
