import e from "express";

const router = e.Router();

router.get('/', (req, res) => {
    res.send('Workshop Route');
})
router.post('/', (req, res) => {
    res.send('Workshop Route');
})

export default router;