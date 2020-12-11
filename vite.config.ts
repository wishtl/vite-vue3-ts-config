import path from 'path';

export default {
  alias: {
    /*
   *       alias package names
   *     'react': '@pika/react',
   *     'react-dom': '@pika/react-dom'
   *
   *     // alias a path to a fs directory
   *     // the key must start and end with a slash
   *     '/@foo/': path.resolve(__dirname, 'some-special-dir') */
    '/@/':path.resolve(__dirname,'src'),
  },
};
