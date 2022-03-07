<template>
  <section>

    <Component_1/>
    <Component_2/>


  </section>
</template>

<script>
import Component_1 from "@/components/Component_1";
import Component_2 from "@/components/Component_2";

export default {
  components: {
    Component_1,
    Component_2
  }


}
</script>

<style lang="css">
section{
  background-color: rgb(17, 125, 192);
  font-family: Helvetica, sans-serif;
  color: white;
  margin: 0;
  margin-top: 10vh;
}
</style>