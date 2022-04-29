<template>
  <div>
    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> Search </h2>

      <v-col>
        <p> Input Format : (YYYY-MM-DD) (Disease Name) </p>
        <v-text-field
            solo
            class ="input"
            label="Search"
            v-model="search"
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
        search: ''
      }
    },
    watch: {
      search(value) {
        const route = {
          name: 'History'
        }
        if (this.search !== '') {
          route.query = {
            search: this.search
          }
        }
        this.$router.push(route)
      },
      '$route.query.search': {
        immediate: true,
        handler (value) {
          this.search = value
        }
      }
    }
}
</script>

<style scoped>
h2 {
  color: white;
}

p {
  color: #525E75;
  margin-bottom: 15px;
  font-weight: bold;
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
