export default {
  saveData(context, data) {
    const formData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email
    }

    localStorage.setItem('IdentifyData', JSON.stringify(formData))

    context.commit('saveData', formData)
  }
}
