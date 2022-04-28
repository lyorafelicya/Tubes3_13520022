<template>
  <div>
    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> {{title}} </h2>
      <br>

      <!-- <v-col>
        <div v-for="history in TestHistory"
            :key="history.id">
            {{history.date}} -
            {{history.Username}} -
            {{history.DiseaseName}} -
            {{history.statusTest}}
        </div>
      </v-col> -->
    </v-card>

     
  </div>
</template>

<script>
export default {
    props: [
        'title'
    ],
    watch: {
      '$route.query.search':{
        immediate: true,
        async handler (value) {
          this.TestHistory = (await HistoryService.getHistoryTest(value)).data
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
