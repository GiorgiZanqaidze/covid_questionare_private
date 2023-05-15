export default {
  saveData(context, data) {
    const formData = {
      name: data.name,
      surname: data.surname,
      email: data.email
    }
    localStorage.setItem('IdentifyData', JSON.stringify(data))
    //
    context.commit('saveData', formData)
  }
}
