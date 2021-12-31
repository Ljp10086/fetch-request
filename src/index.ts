import {request} from './request/http';

const a = request({
  url: 'http://localhost/downStatistics/getAllStatistics',
  headers: {
    'x-isGuidePage': 'true'
  },
  method: 'get',
});

a.then(async (v) => {
  const json = await v.json();
  console.log(json);
})
