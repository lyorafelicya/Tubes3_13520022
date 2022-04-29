<template>
  <div>
    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> {{title}} </h2>
      <br>

      <slot>
        Data not found
      </slot>
    </v-card>

  </div>
</template>

<script>
import HistoryService from '@/services/HistoryService'
export default {
    props: [
        'title'
    ],
    watch: {
      '$route.query.search':{
        immediate: true,
        async handler (value) {
          this.TestHistory = (await HistoryService.getHistoryTests(value)).data
        }
      }
    }
}
</script>

<style scoped>

h2 {
  color : white;
}

.card {
  justify-self:center;
  padding: 30px 30px 40px 40px;
  overflow: hidden;
  border-radius: 20px;
  margin:auto;
  background: #eca1a6;
  border: 2px solid #eea29a;
}

</style>
