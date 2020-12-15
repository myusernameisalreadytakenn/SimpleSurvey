const models = require('./models/index');

const userMapper = (user) => {
    console.log(user.email + ' | ' + user.passwrod + ' | ' + user.status + ' | ' + user.name);
};

const projectMapper = (project) => {
    console.log('#' + ' | ' + survey.name + ' | ' + survey.description);
};


(async () => {
    console.log('--------');
    console.log('Users list');
    console.log('--------');
    const usersList = await models.User.findAll();
    usersList.map(userMapper);

    console.log('--------');
    console.log('Surveys list');
    console.log('--------');
    const SurveysList = await models.Survey.findAll();
    SurveysList.map(surveyMapper);

})();
