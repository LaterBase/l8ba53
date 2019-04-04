import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	res.render('base', {
		locals: {},
	});
});

router.post('/', (req, res, next) => {
	res.render('base', {
		locals: {},
	});
});


module.exports = router;
