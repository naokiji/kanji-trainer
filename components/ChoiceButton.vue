<template>
  <button
      class="text-xl bg-duo-grey-dark ring ring-inset  border-b-2  rounded-xl min-h-[95px] px-2 active:bg-duo-grey-light active:border-b-0 active:border-t-2 active:border-duo-grey-dark active:ring-duo-blue-dark active:text-duo-blue-dark"
      :class="{
    'ring-duo-grey-lighter border-duo-grey-lighter': !props.isRight && !props.isWrong,
      'text-duo-green ring-duo-green border-b-duo-green': props.isRight,
      'text-duo-red ring-duo-red border-b-duo-red': props.isWrong,
    }"
  >
    <slot/>
  </button>
</template>

<script setup>
const props = defineProps({
  isRight: Boolean,
  isWrong: Boolean,
})
</script>