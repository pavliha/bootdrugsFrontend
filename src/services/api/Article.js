/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Article {
  async create(form) {
    const response = await Http.post('/analyzer', form)
    return response.keywords
  }
}

export default new Article()
