import BadgeIssueOrder from "./../models/BadgeIssuOrder.js"


export const badgeIssueOrder = async(req,res)=>{
    const newOrder = new BadgeIssueOrder(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
};
export const updateOrder = async(req,res)=>{
    try {
        const updateOrder = await BadgeIssueOrder.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}
        
        );
         res.status(200).json(updateOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}; 
export const deleteOrder = async(req,res)=>{
    try {
        await BadgeIssueOrder.findByIdAndDelete(req.params.id
        
        );
         res.status(200).json("Request has bee deleted")
    } catch (error) {
        res.status(500).json(error)
    }
};
export const readOrder = async(req,res)=>{
    try {
        const badgeOrder = await BadgeIssueOrder.findById(req.params.id
        
        );
         res.status(200).json(badgeOrder)
    } catch (error) {
        res.status(500).json(error)
    }
};
export const readAllOrders = async(req,res)=>{
    try {
        const badgeOrders = await BadgeIssueOrder.find();
         res.status(200).json(badgeOrders)
    } catch (error) {
        res.status(500).json(error) 
    }
};
