const express = require('express');
const app = express();
const port = 3001


const custDetResp = '<?xml version="1.0" encoding="UTF-8"?><customer><bank_id>bankid1234</bank_id><branchId>12314</branchId><credit_limit><amount>10</amount><currency>EUR</currency></credit_limit><credit_rating><rating>OBP</rating><source>OBP</source></credit_rating><customer_id>123</customer_id><customer_number>123456789</customer_number><date_of_birth>2017-09-19T00:00:00Z</date_of_birth><dependants>123</dependants><dob_of_dependants><element>2017-09-19T00:00:00Z</element></dob_of_dependants><email>contact@tesobe.com</email><employment_status>123</employment_status><face_image><date>2017-09-19T00:00:00Z</date><url>www.openbankproject</url></face_image><highest_education_attained>123</highest_education_attained><kyc_status>true</kyc_status><last_ok_date>2017-09-19T00:00:00Z</last_ok_date><legal_name>legal_name</legal_name><mobile_phone_number>123</mobile_phone_number><nameSuffix>Sr</nameSuffix><relationship_status>123</relationship_status><title>Dr.</title></customer>';

app.get('/t24/api/customer', (req,res) => {
    setTimeout(() => {
        res.status(200).send(custDetResp)
    }, 0);
    
});

app.listen(port, () => console.log(`Simulator listening on ${port}!`))