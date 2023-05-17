import { request } from "express";
import BadgeExaminerRequest from "./../models/BadgeExaminerRequest.js"


export const createRequest = async(req,res)=>{
    const newRequset = new BadgeExaminerRequest(req.body)

    try {
        const savedRequest = await newRequset.save()
        res.status(200).json(savedRequest)
    } catch (error) {
        res.status(500).json(error)
    }
};
export const updateeRequest = async(req,res)=>{
    try {
        const updatedRequset = await BadgeExaminerRequest.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}
        
        );
         res.status(200).json(updatedRequset)
    } catch (error) {
        res.status(500).json(err)
    }
}; 
export const deleteRequest = async(req,res)=>{
    try {
        await BadgeExaminerRequest.findByIdAndDelete(req.params.id
        
        );
         res.status(200).json("Request has bee deleted")
    } catch (error) {
        res.status(500).json(err)
    }
};
export const readRequest = async(req,res)=>{
    try {
        const Requset = await BadgeExaminerRequest.findById(req.params.id
        
        );
         res.status(200).json(Requset)
    } catch (error) {
        res.status(500).json(err)
    }
};
export const readAllRequest = async(req,res)=>{
    try {
        const Requsets = await BadgeExaminerRequest.find();
         res.status(200).json(Requsets)
    } catch (error) {
        res.status(500).json(err) 
    }
};
export const  readSpecificRequests= async (req, res) =>  { 
try {
    const examinerId = req.params.id;
    // const requests = await BadgeExaminerRequest.find({ examinerId }).populate("scouts", "first_name").populate("testbadgeexaminers", "name").exec();
    const requests = await BadgeExaminerRequest.find({ examinerId })

    .populate({ path: "testBadgeExaminers", select: "name" })
    .exec();
    console.log(requests)
  
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json(error);
  }
};
// export const readSpecificRequests = async (req, res) => {
//     try {
//       const requests = await BadgeExaminerRequest.find({ examinerId: req.params.id })
//         .populate('scoutId', 'name')
//         .populate('examinerId', 'name')
//         .exec();
//       res.status(200).json(requests);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   };
  
// export const readSpecificRequests = async(req,res)=>{
//     try {
//         const examinerId = req.params.examinerId; //assuming you're passing examinerId as a parameter in the request
//         const requests = await testRequestSchema.find({ examinerId:id },res).populate('scoutId');
//         res.status(200).json(requests);
//     } catch (error) {
//         res.status(500).json(error) 
//     }
//     const mongoose = require('mongoose');

// export const readSpecificRequests = async(req, res) => {
//   try {
//     const examinerId = mongoose.Types.ObjectId(req.params.examinerId); // convert the examinerId parameter to ObjectId
//     const requests = await testRequestSchema.find({ examinerId }).populate('scoutId');
//     res.status(200).json(requests);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
// export const readSpecificRequests = async(req, res) => {
//     try {
//       const examinerId = req.params.examinerId;
//       const requests = await testRequestSchema.find({ examinerId }).populate('scoutId');
//       res.status(200).json(requests);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
// export const readSpecificRequests = async(req, res) => {
//     try {
//       const examinerId = req.params.examinerId;
//       const requests = await testRequestSchema
//         .find({ examinerId })
//         .populate('examinerId')
//         .populate('scoutId');
//       res.status(200).json(requests);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
// export const readSpecificRequests = async(req, res) => {
//   try {
//     const examinerId = req.params.id;
//     console.log('examinerId:', examinerId);
//     const requests = await testRequestSchema
//       .find({ examinerId })
//       .populate('examinerId')
//       .populate('scoutId');
//     console.log('requests:', requests);
//     res.status(200).json(requests);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
// export const readSpecificRequests = async(req, res) => {
//     try {
//       const examinerId = req.params.id;
//       console.log('examinerId:', examinerId);
//       const requests = await testRequestSchema
//         .find({ examinerId: examinerId })
//         .populate('examinerId')
//         .populate('scoutId');
//       res.status(200).json(requests);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
  


