var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
    };
  },
  methods: {
    changeMessage: function () {
      console.log("text is changing..");
      this.message = "did you just click the button";
    }
  }
});