import { Router } from "express";
import multer from 'multer';
import fs from 'fs';

const fileUploader = multer({ dest: 'files/' })
const router = Router();
const PythonShell = require('python-shell').PythonShell;


var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3.8',
    pythonOptions: ['-u'],
    scriptPath: '/home/dongky/DongKyFolder/edsda-etl/database',
};



router.post('/:dim?/:mea?/csv', fileUploader.single('file'), (req, res) => {
    console.log('dim: ', req.params.dim);
    console.log('mea: ', req.params.mea);
    let dim = req.params.dim;
    let mea = req.params.mea;

    const processedFile = req.file || {};
    let orgName = processedFile.originalname || ''
    orgName = orgName.trim().replace(/ /g, "-")
    const fullPathInServ = processedFile.path;
    const newFullPath = `${fullPathInServ}-${orgName}`;
    fs.renameSync(fullPathInServ, newFullPath);


    options['args'] = [dim, mea, newFullPath];


    PythonShell.run('import_engine.py', options, function (err, results) {
        if (err) {
            console.log(err)
            res.send({
                status: true,
                message: 'file uploaded already exists try another file !',
                fileNameInServer: newFullPath
            })
        }
        else {
            res.send({
                status: true,
                message: 'file uploaded',
                fileNameInServer: newFullPath
            })
        }
        // Results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });


})

export default router;