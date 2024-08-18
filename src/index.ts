import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
class Blockchain {
  private blocks: Block[]; //Block클래스의 배열
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return ""; //첫번째 해시가 없는 상태
    return this.blocks[this.blocks.length - 1].hash;
    //해시값이 있으면 마지막 블럭의 해쉬값 리턴
  }
  public addBlock(data: string) {
    //블록추가시, 블록에 저장하고 싶은 데이터를 보내준다
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock); //새로 만든 블록을 블록배열에 넣어준다
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("First one");
blockchain.addBlock("Fourth one");

console.log(blockchain.getBlocks());
