exports.createPostValidator = (req, res, next) =>{
    req.check('title', "Write a title ").notEmpty()
    req.check('title', "4 <= Title length <= 150 ").isLength({
        min: 4,
        max: 150
    })

    req.check('body', "Write a Body ").notEmpty()
    req.check('body', "4 <= Body length <= 150 ").isLength({
        min: 4,
        max: 1500
    })
    
    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map((err)=>err.msg)[0]
        return res.status(400).json({
            error: firstError
        })
    }

    //proceed to next middleware

    next();

};