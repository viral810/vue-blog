import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery'

export default {
  getCategories (cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'categories?sort=name&hide_empty=false&per_page=50')
      .then(response => {
        cb(response.data.filter(c => c.name !== "Uncategorized"))
      })
      .catch(e => {
        cb(e)
      })
  },

  getMenu (slug, cb) {
    axios.get(window.SETTINGS.API_BASE_MENU + slug)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPages (params, cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'pages?per_page=10&'+$.param(params))
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPage (id, cb) {
    if (_.isNull(id) || !_.isNumber(id)) return false
    axios.get(window.SETTINGS.API_BASE_PATH + 'pages/'+id)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPosts (params, cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'posts?per_page=5&'+$.param(params))
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },
}