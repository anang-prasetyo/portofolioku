<template>
  <div class="container">
    <div class="text-center">
      <h2 class="text-gradient">My Skills</h2>
      <h2>What I'm great at.</h2>
    </div>
    <div v-if="newSkills" class="row skills">
      <div class="col-2 skill" v-for="(skill, index) in newSkills" :key="index">
        <div class="skill-main">
          <img :src="'src/assets/img/logo/'+ skill.name + '.jpg'" :alt='skill.name' style="border:1px solid black">
          <div>{{skill.name}}</div>
          <div class="score" v-if="skill.score == 3">Average</div>
          <div class="score" v-else-if="skill.score == 4">Good</div>
          <div class="score" v-else-if="skill.score == 5">Excelent</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// poor, fair, average, good, excelent
const newSkills = ref()
const skills = ref([
  {
    name: 'Photoshop',
    score: 5
  },
  {
    name: 'Illustrator',
    score: 5
  },
  {
    name: 'CSS',
    score: 5
  },
  {
    name: 'Bootstrap',
    score: 5
  },
  {
    name: 'Bulma',
    score: 5
  },
  {
    name: 'Vue',
    score: 5
  },
  {
    name: 'JavaScript',
    score: 4
  },
  {
    name: 'Firebase',
    score: 4
  },
  {
    name: 'PHP',
    score: 4
  },
  {
    name: 'MySQL',
    score: 4
  },
  {
    name: 'Figma',
    score: 3
  },
  {
    name: 'Codeigniter',
    score: 3
  },
  {
    name: 'Laravel',
    score: 3
  }
])
let filterUpStr = function(a,b) {
  let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
}
let filterDownInt = function(a,b) {
  return b.score - a.score
}
onMounted(() => {
  newSkills.value = skills.value.sort(filterUpStr).sort(filterDownInt)
})
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';

.skills {
  flex-flow: wrap;
  .skill {
    padding: 1rem;
    &-main {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: $grey-lighter;
      border-radius: 1rem;
      padding: 1rem;
      img {
        height: 3rem;
        width: 3rem;
        border-radius: .75rem;
      }
    }
    .score {
      background: $primary;
      color: #fff;
      padding: .5rem 1.75rem;
      border-radius: .75rem;
    }
  }
}
.photoshop {
  background: rgb(5,10,40);
  color: rgb(0,180,255);
}
</style>