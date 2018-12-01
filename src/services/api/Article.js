/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Article {

  find(_id) {
    return Http.get(`/article/${_id}`)
  }

  create(form) {
    return Http.post('/analyzer', form)
  }
}

export default new Article()
