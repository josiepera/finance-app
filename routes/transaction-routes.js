const express = require('express');
const router = express.Router()

const controller = require('../controller/transaction-controller')

router.get('/:id', controller.show);

router.route('/')
  .get(
    controller.index
  )

router.route('/')
  .post(
    controller.create
  )

router.route('/:id')
  .put(
    controller.update
    )

router.delete('/:id', controller.destroy);

module.exports = router;
