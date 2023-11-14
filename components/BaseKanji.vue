<template>
  <section class="font-line bg-duo-grey-dark text-white min-h-screen">
    <div class="container mx-auto text-center">
      <h1 class="font-bold text-3xl pt-3">Kanji Trainer</h1>
      <p class="text-xl mt-1">What's this Kanji ?</p>
      <p class="text-5xl font-bold mt-8">{{ question.kanji }}</p>

      <div class="mt-10 grid grid-cols-2 gap-y-5 gap-x-5 px-7">
        <ChoiceButton
            class="font-bold"
            v-for="answer in answerPoolReading"
            :is-right="readingChoice === answer && readingChoice === question.reading"
            :is-wrong="readingChoice === answer && readingChoice !== question.reading"
            @click="readingChoice = answer"
        >
          {{ answer }}
        </ChoiceButton>
      </div>

      <div class="mt-9 grid grid-cols-2 gap-y-5 gap-x-5 px-7">
        <ChoiceButton
            v-for="answer in answerPoolMeaning"
            :is-right="meaningChoice === answer && meaningChoice === question.meaning"
            :is-wrong="meaningChoice === answer && meaningChoice !== question.meaning"
            @click="meaningChoice = answer"
        >
          {{ answer }}
        </ChoiceButton>
      </div>
      <button
          @click="reload()"
          class="mt-12 rounded-2xl px-6 py-3 bg-duo-blue font-bold text-duo-grey-dark border-b-4 border-b-duo-blue-dark active:bg-duo-blue-light active:border-b-0 active:border-t-4 active:border-t-duo-grey-dark">
        NEXT
      </button>
    </div>
  </section>
</template>

<script setup>
import data from '~/assets/data.json'
import ChoiceButton from "./ChoiceButton";

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
    return item !== question.value;
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

<style>
/*html {*/
/*  font-family: LINESeed, sans-serif;*/
/*  font-size: 2rem;*/
/*  background-color: #121212;*/
/*  color: white;*/
/*}*/

/*.kanji {*/
/*  font-size: 2rem;*/
/*}*/

/*.text-green {*/
/*  color: green;*/
/*}*/

/*.text-red {*/
/*  color: red;*/
/*}*/

/*@font-face {*/
/*  font-family: 'LINESeed';*/
/*  src: url(~/assets/fonts/LINESeedJP_A_TTF_Rg.ttf) format('truetype');*/
/*  font-weight: normal;*/
/*  font-style: normal;*/
/*}*/

/*@font-face {*/
/*  font-family: 'LINESeed';*/
/*  src: url(~/assets/fonts/LINESeedJP_A_TTF_Bd.ttf) format('truetype');*/
/*  font-weight: bold;*/
/*  font-style: normal;*/
/*}*/
</style>