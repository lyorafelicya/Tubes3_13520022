<template>
  <div>
    <div class = "menuNav">
        <button class = "imgButton" @click="navigateTo({name: 'DNATest'})">
            <img src="../assets/logo.png">
        </button>

        <button class = "menuBtn" @click="navigateTo({name: 'addDisease'})">
            Add Disease 
        </button>
    
        <button class = "menuBtn" @click="navigateTo({name: 'History'})"> 
            History 
        </button>
    </div>

  </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menuNav {
  overflow: hidden;
  padding: 5px 10px;
  margin-bottom: 20px;
}

img {
    height: 100px;
}

.imgButton {
    float: left;
}

.menuBtn {
    background-color: transparent;
    float: right;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.menuBtn:hover {
  background-color: #ddd;
  color: black;
}

</style>
