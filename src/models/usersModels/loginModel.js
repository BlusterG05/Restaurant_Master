const { query } = require('../../db/promise_config');

const getBusinessUser = async (email) => {
    console.log('Serching email :', email);

    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email provided');
    }

    const sql = `SELECT user_ced, user_name, user_mail, password, user_plan FROM users WHERE user_mail = ?;`;

      try {
    const res = await query(sql, [email]);
    return res;
  } catch (err) {
    console.error('Error in query execution:', err.message);
    throw new Error('Error fetching email: ' + err.message);
  }

};

// getBusinessUser('jerycohe05@gmail.com')
//   .then(result => console.log(result[0].user_ced))
//   .catch(error => console.error(error));

module.exports = getBusinessUser;
