import { readFileSync, readFile } from 'fs';

// package.json 파일을 동기방식으로 읽는 예
console.log('읽는중... 동기방식으로..');
const buffer: Buffer = readFileSync('../../package.json');
console.log(buffer.toString());

// package.json 파일을 비동기식으로 읽는 예
readFile('../../package.json', (error: any, buffer: Buffer) => {
  console.log('읽는중... 비동기방식으로..');
  console.log(buffer.toString());
});

// Promise와 async/await 구문을 사용한 예
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: any, buffer: Buffer) => {
      if (error) reject(error);
      else resolve(buffer.toString());
    });
  });

async () => {
  const content = await readFilePromise('../../package.json');
  console.log('읽는중... async/await 방식으로..');
  console.log(content);
};
