<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-8">Form will be shown here</div>
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
// import "../../dist/css/main.css";
import UserList from "./UserList";

export default {
  name: "App",
  components: {
    UserList
  },
  data() {
    return {};
  }
};
</script>
