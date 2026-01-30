
// 1. private keyword in Typescript
// # - symbol for private variable - javascript
class Bank{
    private balance1:number=12345;
    #balance2:number=12345
}
const b=new Bank();
console.log((b as any).balance1)