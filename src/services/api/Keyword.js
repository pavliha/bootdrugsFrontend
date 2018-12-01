/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Keyword {
  find(_id) {
    return Http.get(`/keyword/${_id}`)
  }

  search(text) {
    return Http.post('keyword', { text })
  }
}

export default new Keyword()
