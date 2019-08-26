
interface ILine{
  type:string;
  frameId:number;
  value:string;
}

export default class Block {
  _lines:ILine[];
  _frameId:string;

  constructor (frameId?, line?) {
    this._lines = []
    this._frameId = frameId

    if (line) {
      line.frameId = this._frameId
      this._lines.push(line)
    }
  }

  addLineToTop (line) {
    line.frameId = this._frameId
    this._lines.unshift(line)
  }

  addLine (line) {
    line.frameId = this._frameId
    this._lines.push(line)
  }

  getLines () {
    return this._lines
  }
}
