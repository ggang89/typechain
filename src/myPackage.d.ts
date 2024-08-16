interface Config{
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  //init은 함수임을 알려준다.
  //=>config를 받고 boolean을 return한다.

  function exit(code: number): number;
}
//d.ts 파일 : 정의 파일(declaration file)
//=>어떤 코드에 대해 타입스크립트에 타입에 대해 설명해준다
//call signature(타입)을 써줘야 한다