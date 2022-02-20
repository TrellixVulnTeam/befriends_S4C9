module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){return res.redirect('/');}
    return res.render('signup');
};

module.exports.create = async function(req, res){

    let user = await User.create({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        age:req.body.age
    });

    return res.redirect('back');

};