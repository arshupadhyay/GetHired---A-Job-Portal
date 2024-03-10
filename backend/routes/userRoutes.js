const express = require('express');
const {allUsers, singleUser, editUser, deleteUser, createUserJobsHistory} = require('../controllers/userController');
const { isAdmin, isAuthenticated } = require('../middleware/auth');
const router = express.Router();

//user routers


// /api/allusers
router.get('/allusers',isAuthenticated,isAdmin,allUsers);

// /api/user/id
router.get('/user/:id',isAuthenticated,singleUser);

// /api/user/edit/id
router.put('/user/edit/:id',isAuthenticated,editUser);

// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id',isAuthenticated,isAdmin,deleteUser);

// /api/user/jobhistory
router.post('/user/jobhistory',isAuthenticated,createUserJobsHistory);

module.exports = router;
