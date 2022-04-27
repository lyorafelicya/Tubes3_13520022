<template>
  <div>
    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> Search </h2>
      <br>

      <v-col>
        <v-text-field
            solo
            class ="input"
            label="result"
            v-model="result"
            placeholder = "Search by date, disease name, or both">
        </v-text-field>
      </v-col>
    </v-card>

     
  </div>
</template>

<script>
export default {
    data() {
      return {
        result: ''
      }
    },
    watch: {
      result(value) {
        const route = {
          name: 'history'
        }
        if (this.result != '') {
          route.query = {
            result: this.result
          }
        }
        this.$router.push(route)
        // console.log(value)
      },
      '$route.query.search': {
        // immediate: true,
        // handler (value) {
        //   this.search = value
        // }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: white;
}

.input {
  color: white;
  width: 50%;
}

.card {
  justify-self:center;
  padding: 20px 30px 2px 40px;
  overflow: hidden;
  border-radius: 20px;
  margin:auto;
  background: #eca1a6;
  border: 2px solid #eea29a;
  margin-bottom: 20px;
}

</style>
