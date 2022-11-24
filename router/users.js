const express = require('express')
const router = express. Router()
const usercontroller = require('../controllers/user')

  //untuk menampilkan data
  router.get('/users', usercontroller.index)

  
  router.get('/user/:id', usercontroller.show)

  //untuk menambahkan data
  router.post('/user', usercontroller.store)

  //untuk mengedit data
  router.put('/user/:id', usercontroller.update)

  //untuk menghapus data
  router.delete('/user/:id', usercontroller.delete)

  module.exports = router