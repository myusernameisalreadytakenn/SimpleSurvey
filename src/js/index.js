const models = require('./models/index');

const userMapper = (user) => {
    console.log(user.id + ' | ' + user.name + ' | ' + user.email + ' | ' + user.nickname);
};

const projectMapper = (project) => {
    console.log('#' + project.id + ' | ' + project.name);
};


(async () => {
    console.log('--------');
    console.log('Users list');
    console.log('--------');
    const usersList = await models.User.findAll();
    usersList.map(userMapper);

    console.log('--------');
    console.log('Projects list');
    console.log('--------');
    const ProjectsList = await models.Project.findAll();
    ProjectsList.map(projectMapper);

})();
