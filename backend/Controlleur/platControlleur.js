const plat =require('../Models/platModel')
module.exports={
postplat: async (req, res) => {
        const entres  = req.body.entres;
        const platsprincipaux = req.body.platsprincipaux;
        const  desserts  = req.body. desserts ;
        const sauces= req.body.sauces;
        

        try {
          plats = new plat({
            entres,
            platsprincipaux,
            desserts,
            sauces
        
          });
          await plats.save();
          res.json(plats);
        } catch (error) {
          console.error(error.message);
        }
      },
      getplat: async (req, res) => {
        try {
          const platt = await plat.find();
          res.json(platt);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppplat: async (req, res) => {
        try {
          const platt = await plat.findByIdAndDelete(req.params.id);
          res.json(platt);
        } catch (error) {
          console.error(error.message);
        }
      },
      putplat: async (req, res) => {
        try {
          const platt = await plat.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(platt);
        } catch (error) {
          console.error(error.message);
        }
      }
    };














// module.exports={
 
//     addPlat:async (req,res)=>{
//         res.send("hello addplat")
//     },
    
//     getPlat:async(req,res)=>{
//         res.send("hello getplat")
//     },
//     modifPlat:async(req,res)=>{
//         res.send("hello modifplat")
//     },
//     suppPlat:async(req,res)=>{
//         res.send("hello suppplat")
//     }
    
// }