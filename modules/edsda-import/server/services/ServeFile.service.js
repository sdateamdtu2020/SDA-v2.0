import Router from "express";
import path from 'path';

const router = Router();

router.get('/:name', (req, res) => {
    const fileName = req.params.name;
    console.log('fileName', fileName);
    if (!fileName) {
        return res.send({
            status: false,
            message: 'no filename specified',
        })
    }
    res.sendFile(path.resolve(`./files/${fileName}`));
})

export default router;