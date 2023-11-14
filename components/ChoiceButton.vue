<template>
  <button
      class="text-xl outline outline-2 outline-zinc-400 rounded-md min-h-[90px] px-2 bg-zinc-900/75 active:bg-zinc-800 active:outline-4"
      :class="{
      'text-green-400 outline-green-400': props.isRight,
      'text-red-400 outline-red-400': props.isWrong,
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