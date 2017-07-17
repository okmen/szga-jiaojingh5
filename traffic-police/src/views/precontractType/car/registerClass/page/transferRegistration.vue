<template>
  <common :businessTypeId="businessTypeId" :modelOfCar="modelOfCar"></common>
</template>

<script>
  export default {
    props: ['businessTypeId', 'modelOfCar'],
    components: {
      common: require('../components/hasTarget.vue')
    }
  }
</script>
