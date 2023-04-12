interface DataView {
    g1() : number;          //read unsigned byte
    g1s() : number;         //read signed byte
    g2() : number;          //read unsigned short
    g2s() : number;         //read signed short
    g3() : number;          //read unsigned medium
    g3s() : number;         //read signed medium
    g4() : number;          //read unsigned int
    g4s() : number;         //read signed int
    gsmart() : number;      //read unsigned smart
    gsmarts() : number;     //read signed smart
    gjstr() : string;       //read jagex string
    pos: number;            //buffer position
}

DataView.prototype.pos = 0;

DataView.prototype.g1 = function(this: DataView) : number {
    return this.getUint8(this.pos++);
}

DataView.prototype.g1s = function(this: DataView) : number {
    return this.getInt8(this.pos++);
}

DataView.prototype.g2 = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++));
}
DataView.prototype.g2s = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++)) >>> 0;
}

DataView.prototype.g3 = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 16 | this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++));
}

DataView.prototype.g3s = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 16 | this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++)) >>> 0;
}

DataView.prototype.g4 = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 24 | this.getUint8(this.pos++) << 16 | this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++));
}

DataView.prototype.g4s = function(this: DataView) : number {
    return (this.getUint8(this.pos++) << 24 | this.getUint8(this.pos++) << 16 | this.getUint8(this.pos++) << 8 | this.getUint8(this.pos++)) >>> 0;
}

DataView.prototype.gsmart = function(this: DataView) : number {
    return (this.getUint8(this.pos++) < 0x80) ? this.g1() : (this.g2() - 0x8000);
}

DataView.prototype.gsmarts = function(this: DataView) : number {
    return (this.getUint8(this.pos++) < 0x80) ? (this.g1() - 0x40) : (this.g2() - 0xC000);
}

DataView.prototype.gjstr = function(this: DataView) : string {
    let start = this.pos;
    while(this.g1() !== '\n'.charCodeAt(0)) {
    }
    var str = "";
    const raw = this.buffer.slice(start, this.pos - 1);
    const strbuf: DataView = new DataView(raw);
    for(var i = 0; i < raw.byteLength; i++) {
        str += String.fromCharCode(strbuf.getUint8(i));
    }
    return str;
}