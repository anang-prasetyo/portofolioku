<template>
  <div class="container">
    <div class="text-center">
      <h2 class="text-gradient">Check out the proccess</h2>
      <h2>How do I do it.</h2>
    </div>
    <div class="row my-cards row-gap-3">
      <div class="col col-md-6 col-lg-4 my-card" v-for="(proccess, index) in proccesses" :key="index">
        <div class="my-card-main">
          <div class="image">
            <img :src="'src/assets/img/'+ proccess.logo" :alt='"src/assets/img/"+ proccess.logo'>
          </div>
          <div>{{proccess.category}} - {{proccess.name}}</div>
          <div>Detail goes here ...</div>
          <div class="demo">View More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyProjects from './MyProjects.vue';

// poor, fair, average, good, exelent
const proccesses = ref([
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
    name: 'Logo Design with illustrator',
    logo: 'roar - proccess.jpg'
  }
])
</script>

<style lang="scss" scoped>

// .proccesses {
//   flex-flow: wrap;
//   justify-content: space-between;
//   .proccess {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//       &-main {
//       display: inline-flex;
//       flex-direction: column;
//       gap: 1rem;
//       min-width: 350px;
//       max-width: 350px;
//       width: 100%;
//       height: 100%;
//       justify-content: center;
//       align-items: center;
//       background: $grey-lighter;
//       border-radius: 1.5rem;
//       padding-bottom: 1rem;
//       .image {
//         position: relative;
//         min-height: 250px;
//         min-width: 350px;
//         overflow: hidden;
//         -webkit-box-pack: center;
//         -ms-flex-pack: center;
//         justify-content: center;
//         border-radius: 1.5rem;
//         img {
//           height: 250px;
//           display: block;
//           width: 100%;
//           object-fit: cover;
//         }
//       }
//     }
//     .demo {
//       background: $primary;
//       color: #fff;
//       padding: .5rem 1.75rem;
//       border-radius: .75rem;
//     }
//   }
// }
// .photoshop {
//   background: rgb(5,10,40);
//   color: rgb(0,180,255);
// }
</style>