import axios from 'axios';

const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGIzYWQ2NDc1ZDI4MDg5NWU4Y2ExYSIsImlhdCI6MTU5NjIwNzE0NCwiZXhwIjoxNTk4Nzk5MTQ0fQ.0nhWH1KKJeo6P6iCendI6R0Bf5JcrusPr4EkvY1KLNg';

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    axios
        .get('https://gydrus.net/api/v1/accounts', {
          headers:{
            authorization: `Bearer ${access_token}`
          }
        })
        .then(response => {
          console.log('---- response data ---', response.data);
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        })
  });
};