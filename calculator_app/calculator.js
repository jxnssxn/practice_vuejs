var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0
    };
  },
  methods: {
    addIt: function () {
      console.log("solving this now..");
      console.log(parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3));
    },
    multiplyIt: function () {
      console.log("solving this now..");
      console.log(parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3));
    }
  }
});