const customer = require('../models/customer');
const request = require('request');
const xml2js = require('xml2js');

const _CUST_DET_HOST=process.env.CUST_DET_HOST | 'localhost'

/**
 * Controller procedure for fetching 
 * one customer from backend system
 */
exports.getCustomerByID = (req,res,next) => {
    // TODO! Fetch content from T24 webservices            
    request.get('http://'+ _CUST_DET_HOST +':3001/t24/api/customer', 
    (err, response, body) => {
        if(!err  && response.statusCode === 200){
            // Parse received XML response and 
            // map it to JSON
            xml2js.parseString(body, (err, result) => {
                if(err){
                    next(err);
                }                
                customer.bank_id = result.customer.bank_id[0];
                customer.branchId = result.customer.branchId[0];
                customer.customer_number = result.customer.customer_number[0];
                customer.legal_name = result.customer.legal_name[0];
                customer.mobile_phone_number = result.customer.mobile_phone_number[0];
                customer.email = result.customer.email[0];                
                customer.face_image.date = result.customer.face_image[0].date[0];
                customer.face_image.url = result.customer.face_image[0].url[0];
                customer.date_of_birth = result.customer.date_of_birth[0];
                customer.relationship_status = result.customer.relationship_status[0];
                customer.dependants = result.customer.dependants[0];                
                customer.dob_of_dependants = result.customer.dob_of_dependants[0].element[0];                
                customer.credit_rating.rating = result.customer.credit_rating[0].rating[0];
                customer.credit_rating.source = result.customer.credit_rating[0].source[0];
                customer.credit_limit.currency = result.customer.credit_limit[0].currency[0];
                customer.credit_limit.amount = result.customer.credit_limit[0].amount[0];
                customer.highest_education_attained = result.customer.highest_education_attained[0];
                customer.employment_status = result.customer.employment_status[0];
                customer.kyc_status = result.customer.kyc_status[0];
                customer.last_ok_date = result.customer.last_ok_date[0];
                customer.title = result.customer.title[0];
                customer.branchId = result.customer.branchId[0];
                customer.nameSuffix = result.customer.nameSuffix[0];


                res.status(200).send(customer);
            });            
        }                        
    })    
    .on('error', error => {            
        console.log(error);
        next(error);
    });
    

}

