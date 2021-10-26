const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");


router.get('/', (req, res) => {
	res.render('index.hbs', {
		morris: true
	});
});

router.get('/flot', (req, res) => {
	res.render('flot.hbs', {
		flot: true
	});
});

router.get('/morris', (req, res) => {
	res.render('morris.hbs', {
		morris: true
	});
});

router.get('/tables', (req, res) => {
	res.render('tables.hbs', {
		tables: true
	});
});

router.get('/forms', (req, res) => {
	res.render('forms.hbs', {
		morris: true
	});
});

router.get('/panels-wells', (req, res) => {
	res.render('forms.hbs', {
		morris: true
	});
});

router.get('/buttons', (req, res) => {
	res.render('buttons.hbs', {
		morris: true
	});
});

router.get('/notifications', (req, res) => {
	res.render('notifications.hbs', {
		morris: true
	});
});

router.get('/typography', (req, res) => {
	res.render('typography.hbs', {
		morris: true
	});
});

router.get('/icons', (req, res) => {
	res.render('icons.hbs', {
		morris: true
	});
});
router.get('/widgets',(req,res)=>{
	res.render('widgets.hbs',{
		morris : true
	});
});

router.get('/grid', (req, res) => {
	res.render('grid.hbs', {
		morris: true
	});
});

router.get('/blank', (req, res) => {
	res.render('blank.hbs', {
		morris: true
	});
});

router.get('/login', (req, res) => {
	res.render('login.hbs', {
		morris: true
	});
});
router.get("/new", (req, res) => {
	res.redirect(`/${uuidv4()}`);
  });

router.get("/:room", (req, res) => {
	console.log(req.params.room);
	const c= req.params.room;
	console.log(` c= ${c}`);
	res.render('room', { roomId: req.params.room });
  });
module.exports = router;