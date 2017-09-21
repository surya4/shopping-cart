'use strict';
const express = require('express');
const Data = require('../models/dbSchema');

exports.index = function(req, res) {
    res.render('pages/index', {title: "Shopping Cart"})
};