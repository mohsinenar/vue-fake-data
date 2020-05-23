<template>
  <div  id="app">
    <p > Hi! my name is : <span v-dataFaker:name="firstName"></span> </p>
    <p > and this is my best picture ever: </p> <img height="100px" width="100px" v-imageFaker="avatar" />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>