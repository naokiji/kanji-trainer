<template>
  <section class="flex flex-col justify-between min-h-screen font-line bg-duo-grey-dark text-white text-center">
    <div class="">
      <h1 class="font-bold text-3xl pt-3">Kanji Trainer</h1>
      <p class="text-xl mt-1">What's this Kanji ?</p>
      <p class="text-5xl font-bold mt-8">{{ question.kanji }}</p>
    </div>
    <div>
      <NuxtLink to="/parameters">
        O
      </NuxtLink>
    </div>

    <TransitionGroup name="list" tag="button" class="grid grid-cols-2 gap-y-5 gap-x-4 px-6">
      <ChoiceButton
          class="font-bold"
          v-for="answer in answerPoolReading"
          :is-right="readingChoice === answer && readingChoice === question.reading"
          :is-wrong="readingChoice === answer && readingChoice !== question.reading"
          @click="readingChoice = answer"
      >
        {{ answer }}
      </ChoiceButton>
    </TransitionGroup>

    <div class="grid grid-cols-2 gap-y-5 gap-x-4 px-6">
      <ChoiceButton
          v-for="answer in answerPoolMeaning"
          :is-right="meaningChoice === answer && meaningChoice === question.meaning"
          :is-wrong="meaningChoice === answer && meaningChoice !== question.meaning"
          @click="meaningChoice = answer"
      >
        {{ answer }}
      </ChoiceButton>
    </div>
    <div class="mb-4">
      <ActionButtonBlue
          @click="reload"
      >
        NEXT
      </ActionButtonBlue>
    </div>
  </section>
</template>

<script setup>
import rawData from '~/assets/data.json'
import ChoiceButton from "./ChoiceButton";
import ActionButtonBlue from "./ActionButtonBlue";

const selectedUnits = JSON.parse(localStorage.getItem('parameters.units') || '[]')
const data = rawData.filter((item) => {
  if (selectedUnits.length === 0) {
    return true
  }
  const unitName = `${item.lesson.section} ${item.lesson.unit}`
  return selectedUnits.includes(unitName)
})

function getRandomKanji() {
  return data[Math.floor(Math.random() * data.length)];
}

const question = ref(getRandomKanji());
const answerPoolMeaning = ref(getRandomAnswer().map(answer => answer.meaning));
const answerPoolReading = ref(getRandomAnswer().map(answer => answer.reading));
const readingChoice = ref(undefined);
const meaningChoice = ref(undefined);

function getRandomAnswer() {
  let answerPool = data.filter(function (item) {
    return item.kanji !== question.value.kanji;
  })
  answerPool = shuffle(answerPool).slice(0, 3);
  answerPool.push(question.value);
  return shuffle(answerPool);
}

function shuffle(array) {
  return JSON.parse(JSON.stringify(array)).sort(function () {
    return 0.5 - Math.random()
  });
}

function reload() {
  question.value = getRandomKanji();
  answerPoolMeaning.value = getRandomAnswer().map(answer => answer.meaning);
  answerPoolReading.value = getRandomAnswer().map(answer => answer.reading);
  readingChoice.value = undefined;
  meaningChoice.value = undefined;
}
</script>