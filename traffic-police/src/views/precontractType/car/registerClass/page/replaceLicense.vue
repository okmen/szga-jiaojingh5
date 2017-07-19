<template>
  <common :businessTypeId="businessTypeId" :modelOfCar="modelOfCar" :achieveCode="achieveCode"></common>
</template>

<script>
  export default {
    props: ['businessTypeId', 'modelOfCar', 'achieveCode'],
    components: {
      common: require('../components/noTarget.vue')
    }
  }
</script>
