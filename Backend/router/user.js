const express = require('express');
const router = express.Router();

const userControllerHandler = require('../controller/userController')




router.get('/get',userControllerHandler.getuser);


router.put('/put/:id',userControllerHandler.updateUser);


router.post('/post',userControllerHandler.adduser);


router.delete('/delete/:uid',userControllerHandler.deleteuser);


module.exports = router;