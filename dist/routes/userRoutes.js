"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../meddlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const router = new (0, _express.Router)()

router.post('/', _loginRequired2.default,_UserController2.default.store)
router.put('/:id',_loginRequired2.default, _UserController2.default.update)
router.delete('/:id',_loginRequired2.default, _UserController2.default.delete)

exports. default = router
