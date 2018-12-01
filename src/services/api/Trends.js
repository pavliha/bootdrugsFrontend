/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Trends {

  all() {
    return Http.get('/trends')
  }

  find(_id) {
    return Http.get(`/keyword/${_id}`)
  }
}

export default new Trends()
