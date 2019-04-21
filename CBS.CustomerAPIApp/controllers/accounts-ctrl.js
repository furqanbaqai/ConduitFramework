const accountModel = require("../models/account");

exports.getAccountByID = (req,res,next) => {
    const accID = req.query.id;
    const custID = req.query.custID;

    if(accID === undefined && custID === undefined){
        throw new Error("Invalid input");
    }else if(accID !== undefined && custID !== undefined){
        throw new Error("Invalid input");
    }
    res.status(200).send(accountModel);
}