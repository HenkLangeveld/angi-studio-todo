const app = Vue.createApp({
  data() {
    return {
      newToDo: '',
      beforeEditCache: '',
      idForToDo: 1,
      toDos: []
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  // computed: {

  // },
  methods: {
    addToDo() {
      if(this.newToDo.trim().length === 0) {
        return
      }
    this.toDos.push({
      id: this.idForToDo,
      title: this.newToDo,
      done: false,
      editing: false
    });
      this.newToDo = '';
      this.idForToDo++;
    },
    removeToDo(index) {
      this.toDos.splice(index, 1);
    },
    editToDo(toDo) {
      this.beforeEditCache = toDo.title
      toDo.editing = true;
    },
    doneEdit(toDo) {
      if(toDo.title.trim() === '') {
        toDo.title = this.beforeEditCache;
      }
      toDo.editing = false;
    },
    cancelEdit(toDo) {
      toDo.title = this.beforeEditCache;
      toDo.editing = false;
    }
  }
});

app.mount('#app');