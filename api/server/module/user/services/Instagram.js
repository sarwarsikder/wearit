const request = require('request');



exports.getProfile = async (name) => {
    console.log(name)
  try {
    return new Promise((resolve, reject) => request(
      {
        method: 'GET',
        uri: `https://graph.facebook.com/me?access_token=54364536&fields=id,cover,name,email,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified`
      },
      (err, response, body) => {
        if (err) {
          return reject(err);
        }

        const data = JSON.parse(body);
        if (data.error) {
          return reject(data);
        }
        return resolve(data);
      }
    ));
  } catch (e) {
    throw e;
  }
};
