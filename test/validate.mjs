// eslint-disable-next-line import/no-unresolved
import test from 'ava';

import { transform } from './helper/lib.mjs';

test('server', (t) => {
  t.throws(() => transform('', { server: 1 }), {
    instanceOf: TypeError,
    message: '`server` should be string',
  });

  t.throws(() => transform('', { server: '55' }), {
    instanceOf: TypeError,
    message: '`server` should be URL',
  });

  t.throws(() => transform('', { server: 'ftp://localhost' }), {
    instanceOf: TypeError,
    message: '`server` protocol should be http or https',
  });
});

test('headers', (t) => {
  t.throws(() => transform('', { headers: true }), {
    instanceOf: TypeError,
    message: '`headers` should be object',
  });

  t.throws(() => transform('', { headers: { a: 0 } }), {
    instanceOf: TypeError,
    message: '`headers` should object of string',
  });
});

test('alias', (t) => {
  t.throws(() => transform('', { alias: true }), {
    instanceOf: TypeError,
    message: '`alias` should be array',
  });

  t.throws(() => transform('', { alias: [' '] }), {
    instanceOf: TypeError,
    message: '`alias` should array of non empty string',
  });
});
