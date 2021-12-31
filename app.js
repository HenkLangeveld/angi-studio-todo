Vue.createApp({
  data() {
    return {
      toDos: [],
      enteredValue: ''
    };
  },
  methods: {
    addToDo() {
      this.toDos.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');