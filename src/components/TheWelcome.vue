<template>
  <div class="container d-flex align-items-center justify-content-center" style="height: calc(100vh - 40px);">
    <div class="row row-gap-5">
      <div class="col-12 col-md d-flex flex-column gap-3">
        <div class="h1">Hi, I'm Anang <br><span class="text-gradient">Full Stack Developer & <br>Graphic Designer.</span></div>
        <div class="h2">Based in Surakarta, Indonesia. Computer Science Degree.</div>
        <div>I'm a self-motivated full-stack developer with a passion for building user-centric web applications. I'm proficient in fundamental front-end and server-side languages, with a strong emphasis on Vue, React & Express.</div>
      </div>
      <div class="col-12 col-md">
        <div class="intro-right">
          <div class="photo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.intro {
  &-left {
    max-width: 25rem;
    h1 {
      line-height: 2.5rem;
    }
    h2 {
      line-height: 1.75rem;
    }
  }
  &-right {
    height: 100%;
    width: 100%;
    display: flex;
    .photo {
      width: 10rem;
      height: 10rem;
      background: $gradient;
      border-radius: 1.5rem;
      margin: auto;
    }
  }
}

</style>