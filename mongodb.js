db.resource_wise_billing_daily.aggregate([
    { $match: { "service_account_id": ObjectId("6315ddc63a6f7ec8fbea928e") } }, 
    { $group: { _id: { Year: "$year" }} }} 
])