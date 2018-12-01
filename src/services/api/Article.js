/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Article {
  async create(form) {
    return Http.post('/analyzer', form)
  }
}

export default new Article()
