const admin =require('../Models/adminModel')
module.exports={
postadmin: async (req, res) => {
        const nom  = req.body.nom;
        const prenom  = req.body.prenom;
        const  email  = req.body.email ;
        const motpass= req.body.motpass;
        

        try {
          admins = new admin({
            nom,
            prenom,
            email,
            motpass
        
          });
          await admins.save();
          res.json(admins);
        } catch (error) {
          console.error(error.message);
        }
      },
      getadmin: async (req, res) => {
        try {
          const admn = await admin.find();
          res.json(admn);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppadmin: async (req, res) => {
        try {
          const admn = await admin.findByIdAndDelete(req.params.id);
          res.json(admn);
        } catch (error) {
          console.error(error.message);
        }
      },
      putadmin: async (req, res) => {
        try {
          const admn = await admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(admn);
        } catch (error) {
          console.error(error.message);
        }
      }
    };









// module.exports={
 
//     addAdmin:async (req,res)=>{
//         res.send("hello addAdmin")
//     },
    
//     getAdmin:async(req,res)=>{
//         res.send("hello getAdmin")
//     },
//     modifAdmin:async(req,res)=>{
//         res.send("hello modifAdmin")
//     },
//     suppAdmin:async(req,res)=>{
//         res.send("hello suppAdmin")
//     }
    
// }