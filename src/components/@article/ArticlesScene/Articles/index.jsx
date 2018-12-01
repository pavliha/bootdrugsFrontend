import React from 'react'
import { object } from 'prop-types'
import Cards from './Cards'
import connector from '../connector'

const Articles = ({ article }) =>
  article.articles.map(art =>
    <Cards key={art._id} article={art} />)

Articles.propTypes = {
  article: object.isRequired,
}

export default connector(Articles)
