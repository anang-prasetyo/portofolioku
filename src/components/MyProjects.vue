<template>
  <div class="container">
    <div class="pb-3 text-center">
      <h2 class="text-gradient">My Projects</h2>
      <h2>I make modern website.</h2>
    </div>
    
    <div v-if="newDb" class="row my-cards row-gap-4">
      <div class="col-sm col-md-6 col-lg-4 my-card" v-for="dw, i in newDb" :key="i">
        <div class="my-card-main justify-content-start">
          <div class="image position-relative">
            <img :src="'src/assets/img/'+ dw.name + '.jpg'" :alt="dw.name">
            <div class="d-flex gap-1 flex-wrap align-items-end justify-content-center position-absolute w-100 tag-img">
              <img v-for="t, i in dw.tag.sort()" :key="i" :src="'src/assets/img/logo/'+ t + '.jpg'" :alt="t">
            </div>
          </div>
          <div v-if="dbDetail[i]" class="px-4 py-2 d-flex flex-column gap-2 w-100">
            <div>{{ dw.name }}</div>
            <div>{{ dw.desc }}</div>
            <div class="d-flex gap-1 flex-wrap my-3">
              <div v-for="t, i in dw.tag.sort()" :key="i" class="tag-text">{{ t }}</div>
            </div>
            <div class="d-flex gap-2 justify-content-between">
              <button class="btn btn-primary rounded-3">View Demo</button>
              <button class="btn btn-light" @click="dbDetail[i] = !dbDetail[i]">Hide Detail</button>
            </div>
          </div>
          <div v-else class="px-4 d-flex align-items-center justify-content-between w-100 gap-2">
            <div>{{ dw.name }}</div>
            <button class="btn btn-light" @click="dbDetail[i] = !dbDetail[i]">Detail</button>
          </div>
        </div>
      </div>
    <!-- <div class="row my-cards row-gap-3">
      <div class="col-sm col-md-6 col-lg-4 my-card" v-if="currentDb.web">
        <div class="my-card-main">
          <div class="image position-relative">
            <img :src="'src/assets/img/'+ currentDb.web.name + '.jpg'" :alt="currentDb.web.name">
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="left: 2%;" @click="previousIndex(db.web, 'web', 0)"><i class="bi-arrow-left"></i></button>
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="right: 2%;" @click="nextIndex(db.web, 'web', 0)"><i class="bi-arrow-right"></i></button>
          </div>
          <div>{{ currentDb.web.name }}</div>
          <div>{{ currentDb.web.desc }}</div>
          <div class="demo">View Demo</div>
        </div>
      </div> -->
      <!-- <div class="col-sm col-md-6 col-lg-4 my-card" v-if="currentDb.game">
        <div class="my-card-main">
          <div class="image position-relative">
            <img :src="'src/assets/img/'+ currentDb.game.name + '.jpg'" :alt="currentDb.game.name">
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="left: 2%;" @click="previousIndex(db.game, 'game', 1)"><i class="bi-arrow-left"></i></button>
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="right: 2%;" @click="nextIndex(db.game, 'game', 1)"><i class="bi-arrow-right"></i></button>
          </div>
          <div>{{ currentDb.game.name }}</div>
          <div>{{ currentDb.game.desc }}</div>
          <div class="demo">Try Game</div>
        </div>
      </div> -->
      <!-- <div class="col-sm col-md-6 col-lg-4 my-card" v-if="currentDb.animasi">
        <div class="my-card-main">
          <div class="image position-relative">
            <img :src="'src/assets/img/'+ currentDb.animasi.name + '.jpg'" :alt="currentDb.animasi.name">
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="left: 2%;" @click="previousIndex(db.animasi, 'animasi', 1)"><i class="bi-arrow-left"></i></button>
            <button class="btn btn-light position-absolute top-50 translate-middle-y" style="right: 2%;" @click="nextIndex(db.animasi, 'animasi', 1)"><i class="bi-arrow-right"></i></button>
          </div>
          <div>{{ currentDb.animasi.name }}</div>
          <div>{{ currentDb.animasi.desc }}</div>
          <div class="demo">View More</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// poor, fair, average, good, exelent

const dbDetail = ref([])
const dbType = ref(['web', 'game', 'animasi'])
const db = ref({
  web: [
    {
      name: 'Netplik',
      address: '',
      desc: 'Movie web application to display and play a collection of films and series. Use the local database as a javascript object stored in a file named db.js. Netplik can display movies and series with external text files. It also has a dynamic category view based on the changed database. Very simple yet powerful and easy to use. You just need to add new movies or series in the db.js file to update your collection.',
      tag: ['Vue', 'Bootstrap', 'Photoshop', 'CSS', 'JavaScript']
    },
    {
      name: 'SPK-PDPS',
      address: '',
      desc: "SPK in Indoesian Sistem Pendukung Keputusan, DSS (Decision Support System) in English. Was my first project that I made with vue. I'm using vue version 3 on the first javascript website I've ever built. Also for database I use firebase firestore which I already know when I learn more about vue. This combination is on a whole different level for building modern websites. I not only focused on DSS, but also added some cool features like chat rooms, friendly avatar customization and theme switching.",
      tag: ['Vue', 'Bulma', 'Photoshop', 'CSS', 'JavaScript', 'Firebase', 'Figma']
    },
    {
      name: 'Almamater Coffee & Eatery',
      address: '',
      desc: 'this is almamater coffee & eatery',
      tag: ['Vue', 'Bootstrap', 'Photoshop', 'CSS', 'JavaScript']
    },
    {
      name: 'Anpra Shop',
      address: '',
      desc: 'A trial online shop to promote as well as to sell your products. It comes with a Neumorphism design to make your product aesthetic and super cool. As an admin, you can manage your content such as add, edit or delete products.',
      tag: ['Codeigniter', 'PHP', 'CSS', 'MySQL', 'Illustrator']
    },
  ],
  game: [
    {
      name: 'Ball Warrior',
      address: '',
      desc: 'this is Ball Warrior'
    },
    {
      name: 'Guess the fruit',
      address: '',
      desc: 'this is Guess the fruit'
    },
  ],
  animasi: [
    {
      name: 'Amongus berjalan',
      address: '',
      desc: 'this is Amongus berjalan'
    },
    {
      name: 'Marcos Alonso Juggling',
      address: '',
      desc: 'this is Marcos Alonso Juggling'
    },
    {
      name: 'Bola memantul',
      address: '',
      desc: 'this is Bola memantul'
    },
    {
      name: 'Takoyaki Hiroshi desain pack',
      address: '',
      desc: 'this is Takoyaki Hiroshi desain pack'
    },
    {
      name: 'Omah Furniture logo desain',
      address: '',
      desc: 'this is Omah Furniture logo desain'
    },
    {
      name: 'Roar logo esport',
      address: '',
      desc: 'this is Roar logo esport'
    },
  ]
})
const currentDb = ref({
  web: null,
  game: null
})
const currentIndex = ref([0,0,0])
const nextIndex = (a, b, c) => {
  if(currentIndex.value[c] < a.length-1){
    currentIndex.value[c]++
    if (b === 'web'){
      currentDb.value.web = a[currentIndex.value[0]]
    }
    else if (b === 'game'){
      currentDb.value.game = a[currentIndex.value[1]]
    }
    else if (b === 'animasi'){
      currentDb.value.animasi = a[currentIndex.value[1]]
    }
  }
  else {
    currentIndex.value[c] = 0
    if (b === 'web'){
      currentDb.value.web = a[0] 
    }
    else if (b === 'game'){
      currentDb.value.game = a[0]
    }
    else if (b === 'animasi'){
      currentDb.value.animasi = a[0]
    }
  }
}
const previousIndex = (a, b, c) => {
  if(currentIndex.value[c] == 0){
    currentIndex.value[c] = a.length-1
    if (b === 'web'){
      currentDb.value.web = a[a.length-1]
    }
    else if (b === 'game'){
      currentDb.value.game = a[a.length-1]
    }
    else if (b === 'animasi'){
      currentDb.value.animasi = a[a.length-1]
    }
  }
  else {
    currentIndex.value[c]--
    if (b === 'web'){
      currentDb.value.web = a[currentIndex.value[0]]
    }
    else if (b === 'game'){
      currentDb.value.game = a[currentIndex.value[1]]
    }
    else if (b === 'animasi'){
      currentDb.value.animasi = a[currentIndex.value[1]]
    }
  }
}
const newDb = ref()

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

onMounted(() => {
  document.onreadystatechange = async() => {
    if (document.readyState == "complete") {
      console.log('Page completed with image and files!')
      newDb.value = db.value.web.sort(filterUpStr)
      currentDb.value.web = db.value.web[0]
      currentDb.value.game = db.value.game[0]
      currentDb.value.animasi = db.value.animasi[0]
      for( let a=0 ; a<db.value.web.length ; a++){
        dbDetail.value.push(false)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.tag{
  &-text{
    &::after {
      content: ',';
    }
    &:last-child::after {
      content: '.';
    }
  }
  &-img {
    bottom: 0rem;
    padding: 1rem 0 .5rem 0;
    background: linear-gradient(0deg,rgba(100,100,100,1), transparent);
    & img{
      border-radius: 2px;
      max-height: 2rem;
      max-width: 2rem;
      transition: all .5s ease;
      &:hover {
        max-height: 2.5rem;
        max-width: 2.5rem;
      }
    }
  }
}
.photoshop {
  background: rgb(5,10,40);
  color: rgb(0,180,255);
}
</style>