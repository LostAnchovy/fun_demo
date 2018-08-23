const db = require('../config/db.config')
const event = db.event

exports.create = (req,res)=>{
    event.create({
        event_title: req.body.eventtitle,
        location: req.body.location,
        event_img: req.body.eventimg,
        event_date: req.body.date,
        event_time: req.body.time,
        description: req.body.description,
    }).then((newEvent)=>{
        res.json(newEvent)
    }).catch(err=>{
        res.status(501).send({error:'could not add new event to database'})
    })
}

exports.findAll =(req, res) =>{
    event.findAll().then((event)=>{
        res.json(event)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve events'})
    })
}

exports.update = (req, res) => {
	const id = req.params.eventId;
	event.update( {
        event_title: req.body.eventtitle,
        location: req.body.location,
        event_img: req.body.eventimg,
        event_date: req.body.date,
        event_time: req.body.time,
        description: req.body.description,
         }, 
		{ returning: true, where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};

exports.findById = (req, res) => {	
	event.findById(req.params.eventId).then((event) => {
		res.json(event);
	}).catch((err)=>{
        res.send(500).send({error:'could not retrieve event'})
    })
};

exports.delete = (req,res)=>{
    const id = req.params.eventId
    event.destroy({
        where:{id:id}
    }).then(deleteEvent =>{
        res.send(`Event ${id} has been deleted`)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete User'})
    })
}



