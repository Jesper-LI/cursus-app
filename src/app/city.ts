export class City {
    constructor (
        public id:number, //assigned by Server
        public name:string,
        public province?:string,
        public url?:string, //optional
        
    ) {
        
    }
}
