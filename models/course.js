const mongoose=require ("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "description":String,
        "date":String,
        "duration":String,
        "venue":String,
        "trainer":String
    }
)

let coursemodel=mongoose.model("course",schema)
module.exports={coursemodel}