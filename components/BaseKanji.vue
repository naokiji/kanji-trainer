<template>
  <h1>Kanji Trainer</h1>
  <p>
    What's this Kanji ?
  </p>
  <p>
    <strong class="kanji">{{ question.kanji }}</strong>
  </p>

  <ul>
    <strong>
      <li v-for="answer in answerPoolReading" :class="{
      'text-green': readingChoice === answer && readingChoice === question.reading,
      'text-red': readingChoice === answer && readingChoice !== question.reading
    }" @click="readingChoice = answer">{{ answer }}
      </li>
    </strong>
  </ul>

  <ul>
    <li v-for="answer in answerPoolMeaning" :class="{
      'text-green': meaningChoice === answer && meaningChoice === question.meaning,
      'text-red': meaningChoice === answer && meaningChoice !== question.meaning
    }" @click="meaningChoice = answer">{{ answer }}
    </li>
  </ul>
  <button @click="reload()">Next question</button>
</template>

<script setup>
import data from '~/assets/data.json'

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
  answerPool = shuffle(answerPool).slice(0, 4);
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
html {
  font-family: LINESeed, sans-serif;
  font-size: 2rem;
  background-color: #121212;
  color: white;
}

.kanji {
  font-size: 2rem;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}

@font-face {
  font-family: 'LINESeed';
  src: url(~/assets/fonts/LINESeedJP_A_TTF_Rg.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LINESeed';
  src: url(~/assets/fonts/LINESeedJP_A_TTF_Bd.ttf) format('truetype');
  font-weight: bold;
  font-style: normal;
}
</style>