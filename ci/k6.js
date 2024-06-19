import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '10s',
};

export default function() {
  const requests = {
    'foo': {
      url: 'http://localhost',
      params: { headers: { 'Host': 'foo.localhost' } },
    },
    'bar': {
      url: 'http://localhost',
      params: { headers: { 'Host': 'bar.localhost' } },
    },
  };
  http.batch(requests);
}
