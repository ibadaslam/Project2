export const state = () => {
    students: [
      {name: 'ibad', email: 'ibad@gmail.com', age: 76, rollNo: 'RM3929'},
      {name: 'jack', email: 'jack@gmail.com', age: 24, rollNo: 'RM3859'},
      {name: 'asad', email: 'asad@gmail.com', age: 16, rollNo: 'RM9594'},
      {name: 'fida', email: 'fida@gmail.com', age: 18, rollNo: 'RM8724'},
      {name: 'Nida', email: 'nida@gmail.com', age: 26, rollNo: 'RM0192'},
      {name: 'John', email: 'john@gmail.com', age: 19, rollNo: 'RM8723'}
    ]
}

export const actions = {
  addingStudents ({commit}, payload) {
    commit("addStudent", payload)
  }, 
  editingStudents ({commit}, payload) {
    commit("editStudent", payload)
  },
  deletingStudents ({commit}, payload) {
    commit("delStudent", payload)
  }
}

export const mutations = {
  addStudent (state, payload) {
    state.students.push(payload)
  },
  editStudent (state, payload) {
    let obj = { 
      name: payload.name,
      rollNo: payload.rollNo,
      age: payload.age,
      city: payload.city,
    }
    state.students[payload.index] = obj
  },
  delStudent (state, payload) {
    state.students.splice(payload.index,1)
  }
}

export const getters = {
  fetchStudents (state) {
    return state.students
  }
}
