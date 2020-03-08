new Vue ({
  el: '#app',
  data: {
    newTodoTitle: null,
    todos: [],
    filter: 'all'
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      } else if (this.filter === 'completed') {
        return this.todos.filter((todo) => {
          return todo.completed
        })
      } else if (this.filter === 'active') {
        return this.todos.filter((todo) => {
          return !todo.completed
        })
      }
      
    }
  },
  filters: {
    pluralize(n) {
      if (n === 1) {
        return 'item'
      } else {
        return 'items'
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodoTitle) {
        return
      }
      this.todos.push({ title: this.newTodoTitle, completed: false })
      this.newTodoTitle = null
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})
  