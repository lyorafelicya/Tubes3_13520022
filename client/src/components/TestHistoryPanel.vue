<template>
  <div>
    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> {{title}} </h2>
      <br>

      <v-col>
        <slot>
            <!-- No Slot Content Defined -->
        </slot>
      </v-col>
    </v-card>

     
  </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
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
