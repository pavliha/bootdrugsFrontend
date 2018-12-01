/* eslint-disable class-methods-use-this,no-return-await */
import Http from 'services/Http'

class Trends {

  all() {
    return Http.get('/trends')
  }
}

export default new Trends()
