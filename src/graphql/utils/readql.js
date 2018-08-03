import fs from 'fs';
import path from 'path';

const readQl = file => {
  const filePath = path.resolve(__dirname, '../../', file) 
  return fs.readFileSync(filePath, 'utf8')
}

export default readQl;