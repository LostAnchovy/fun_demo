const db = require('../config/db.config')
const User = db.user

exports.create =(req,res)=>{
    User.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
    }).then((newUser)=>{
        res.redirect('/roster')
    }).catch(err=>{
        res.status(501).send({error:'could not add new user to database'})
    })
}

exports.findAll = (req,res)=>{
    User.findAll()
    .then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
}

exports.update = (req, res) => {
	const id = req.params.userId;
	User.update( {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
         }, 
		{ returning: true, where: {id: id} }
	).then(() => {
		res.redirect('/roster')
	}).catch((error)=>{
        res.send(500).send('error updating user')
    })
};

exports.findById = (req, res) => {	
    User.findById(req.params.userId).then((user) => {
		res.json(user);
	}).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
};

exports.delete = (req,res)=>{
    const id = req.params.userId
    User.destroy({
        where:{id:id}
    }).then(deleteUser =>{
        res.send(`user ${id} has been deleted`)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete User'})
    })
}