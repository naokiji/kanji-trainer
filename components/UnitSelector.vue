<template>
  <ul>
    <li v-for="unit in units" @click="toggleUnit(unit)">{{ unit }}</li>
  </ul>
  <pre>{{ selectedUnits }}</pre>
</template>

<script setup>
import data from '~/assets/data.json'

const units = getUnits()
const selectedUnits = ref([])
selectedUnits.value = JSON.parse(localStorage.getItem('parameters.units') || '[]')

watch(selectedUnits, (newUnits) => {
      localStorage.setItem('parameters.units', JSON.stringify(newUnits))
    },
    {deep: true})

function getUnits() {
  return data.reduce((carry, item) => {
    const unitName = `${item.lesson.section} ${item.lesson.unit}`
    if (!carry.includes(unitName)) {
      carry.push(unitName)
    }
    return carry
  }, [])
}

function toggleUnit(unit) {
  if (!selectedUnits.value.includes(unit)) {
    selectedUnits.value.push(unit)
  } else {
    selectedUnits.value.splice(selectedUnits.value.indexOf(unit), 1)
  }

}

</script>