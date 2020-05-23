# vue-fake-data

> a vuejs plugin to generate realistic fake data

## installation 

``` bash
npm i vue-fake-data --save
```
## How to use 
```bash
import vueFakeData from 'vueFakeData'

Vue.use(vueFakeData,{locale: 'eng'})
```
## Global Object 
``` bash
### available Global Object 
Vue.$DataFaker
```
#### Example
```bash
<template>
  <div  id="app">
    <p>Hey,my address is {{fakeStreetAddress}}, {{fakeCity}}  :)</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
	fakeCity:function(){
      return this.$DataFaker.address.city(); 
	},
	fakeStreetAddress:function(){
      return this.$DataFaker.address.streetAddress(); 
    },
  }
}
</script>
```

## directives 

- **dataFaker**:  help you to generate Fake data such as names and emails ...
	 
 - **imageFaker**:	  you can use it with `<img>` tag to change the `src` attr to a random imag url 
  
  #### Example:
``` bash
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
```
## Components 
soon...