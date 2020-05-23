/**
  * vue-fake-data
  * (c) 2020 mouhcine narhmouche
  * @license MIT
  */
import faker from "faker"

const vueFakeData = {
  validatBinding:function (binding) {
    if(binding.arg=="image"){
      console.warn(`you can use v-imageFaker instead of v-DataFaker to create a fake image`)
      return true
    }
    if (!faker.hasOwnProperty(binding.arg || !faker[binding.arg].hasOwnProperty(binding.expression) )) {
      throw `the argument ${binding.arg} or ${binding.expression} is not valid `
      return false
    }
    return true 

  },
  validatImageBinding:function (binding) {
    if(!faker.image.hasOwnProperty(binding.expression)){
      throw `the argument ${binding.expression} is not valid `
      return false
    }
    return true
  }
}

/**
 * Plugin API
 */
vueFakeData.install = function (Vue, options) {

  if (options && options.locale) {
      faker.locale = options.locale;
    }


  // Add an instance method
  Vue.prototype.$DataFaker = faker



  // adding directives
  Vue.directive('dataFaker', {
    isLiteral: true,
    bind :function(el, binding){
      if(vueFakeData.validatBinding(binding)){
        var fakeData = faker[binding.arg][binding.expression]()
        if (typeof fakeData == "object") {
            fakeData = JSON.stringify(fakeData)
        }
        el.innerHTML = fakeData
      }
    }
  })

  Vue.directive('imageFaker', {
    isLiteral: true,
    bind :function(el, binding){
      if(vueFakeData.validatImageBinding(binding)){
        el.src = faker.image[binding.expression]()
      }
    }
  })

}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueFakeData)
}

export default vueFakeData