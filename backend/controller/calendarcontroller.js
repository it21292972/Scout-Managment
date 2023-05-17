import CalendarMeetings from "./../models/calendarmodel.js"


export const createTime = async(req,res)=>{
    const { title, start, end } = req.body;
    const meeting = new CalendarMeetings({ title, start, end });
    await meeting.save();
    res.json(meeting);
};
export const updateTime = async(req,res)=>{
    const { id } = req.params;
    const { title, start, end } = req.body;
    const meeting = await CalendarMeetings.findByIdAndUpdate(
      id,
      { title, start, end },
      { new: true }
    );
    res.json(meeting);
    
}; 
export const deleteTime = async(req,res)=>{
    const { id } = req.params;
    await CalendarMeetings.findByIdAndDelete(id);
    res.sendStatus(204);
};


export const readAllTimes = async(req,res)=>{
    const meeting = await CalendarMeetings.find();
    res.json(meeting);
};