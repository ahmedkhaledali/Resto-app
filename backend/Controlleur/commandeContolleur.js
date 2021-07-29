const commande =require('../Models/commandeModel')
module.exports={
postcommande: async (req, res) => {
        const plat  = req.body.plat;
        const quantiter = req.body.quantiter;
        const  prix  = req.body.prix ;
        const etat= req.body.etat;
        

        try {
          commandes = new commande({
            plat,
            quantiter,
            prix,
            etat
        
          });
          await commandes.save();
          res.json(commandes);
        } catch (error) {
          console.error(error.message);
        }
      },
      getcommande: async (req, res) => {
        try {
          const comand = await commande.find();
          res.json(comand);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppcommande: async (req, res) => {
        try {
          const comand = await commande.findByIdAndDelete(req.params.id);
          res.json(comand);
        } catch (error) {
          console.error(error.message);
        }
      },
      putcommande: async (req, res) => {
        try {
          const comand = await commande.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(comand);
        } catch (error) {
          console.error(error.message);
        }
      }
    };









// module.exports={
 
//     addCommande:async (req,res)=>{
//         res.send("hello addCommande")
//     },
    
//     getCommande:async(req,res)=>{
//         res.send("hello getCommande")
//     },
//     modifCommande:async(req,res)=>{
//         res.send("hello modifCommande")
//     },
//     suppCommande:async(req,res)=>{
//         res.send("hello suppCommande")
//     }
    
// }