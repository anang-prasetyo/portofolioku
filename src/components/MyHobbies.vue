<template>
  <div class="m-5 px-5">
    <div class="block has-text-centered">
      <h2 class="text-gradient">My Hobbies</h2>
      <h2>What I do when I'm free.</h2>
    </div>
    <div class="columns hobbies">
      <div class="column is-4 hobby" v-for="(hobby, index) in hobbies" :key="index">
        <div class="hobby-main">
          <div class="image">
            <img :src="'src/assets/img/'+ hobby.logo" :alt='"src/assets/img/"+ hobby.logo'>
          </div>
          <div>{{hobby.category}} - {{hobby.name}}</div>
          <div>Detail goes here ...</div>
          <div class="demo">View More</div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// poor, fair, average, good, exelent
const hobbies = ref([
  {
    category: 'Editing',
    name: 'Graphic Design with Photoshop',
    logo: 'pulisic werner ziyech - proccess.jpg'
  },
  {
    category: 'Modeling',
    name: '3D Object with Blender',
    logo: 'ucl trophy - proccess.jpg'
  },
  {
    category: 'illustrating Logo',
    name: 'Roar Logo with illustrator',
    logo: 'roar - proccess.jpg'
  }
])
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';

.hobbies {
  flex-flow: wrap;
  justify-content: space-between;
  .hobby {
    display: flex;
    justify-content: center;
    align-items: center;
      &-main {
      display: inline-flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 350px;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      background: $grey-lighter;
      border-radius: 1.5rem;
      padding-bottom: 1rem;
      .image {
        position: relative;
        min-height: 250px;
        min-width: 350px;
        overflow: hidden;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 1.5rem;
        img {
          height: 250px;
          display: block;
          width: 100%;
          object-fit: cover;
        }
      }
    }
    .demo {
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