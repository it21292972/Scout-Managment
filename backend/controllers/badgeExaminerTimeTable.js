import Examination from "./../models/BadgeExaminerTimeTable.js"


export const createTime = async(req,res)=>{
    const { title, start, end } = req.body;
    const examination = new Examination({ title, start, end });
    await examination.save();
    res.json(examination);
};
export const updateTime = async(req,res)=>{
    const { id } = req.params;
    const { title, start, end } = req.body;
    const examination = await Examination.findByIdAndUpdate(
      id,
      { title, start, end },
      { new: true }
    );
    res.json(examination);
    
}; 
export const deleteTime = async(req,res)=>{
    const { id } = req.params;
    await Examination.findByIdAndDelete(id);
    res.sendStatus(204);
};


export const readAllTimes = async(req,res)=>{
    const examinations = await Examination.find();
    res.json(examinations);
};
