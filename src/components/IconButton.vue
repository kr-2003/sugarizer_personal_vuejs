<template>
  <div :id="id" class="icon-button">
    <div :id="iconButtonLink" class="icon-button-icon"></div>
    <div class="icon-button-text">{{ iconButtonText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    iconButtonLink: String,
    iconButtonText: String,
    id: String
  }
}
</script>

<style scoped>
.icon-button {
  border-radius: 22px;
  margin-top: 5px;
  height: 35px;
  background-color: #808080;
  border: 2px solid #808080;
  user-select: none;
}

#left-button {
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: 120px;
}
#right-button {
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 120px;
}
.icon-button-text {
  margin-top: 10px;
  width: inherit;
  padding-left: 38px;
  padding-right: 38px;
  color: white;
  display: inline-block;
  font-size: 10pt;
}
.icon-button-icon {
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 6px;
  margin-top: 6px;
}
#go-left-icon {
  background-image: url('../assets/icons/go-left.svg');
}
#go-right-icon{
    background-image: url('../assets/icons/go-right.svg');
}
</style>
