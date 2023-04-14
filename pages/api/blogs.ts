// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
// import * as fs from 'node:fs';
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   fs.readFile("blogdata/how to learn faFlask.jason",'utf-8',(err.Data), =>{

//   })
//   res.status(200).json(JSON.parse(data))
// }


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { error } from 'node:console';
import * as fs from 'node:fs';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile(`blogdata/how-to-learn-flask.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json(JSON.parse(error:"wrong information") );
      return;
    }
    res.status(500).json(JSON.parse('data'));
  });
}