

class GrantParent
{
      test:number=10
}
class parent extends GrantParent
{
}
class Child extends parent
{
}
const c1=new Child()
console.log(c1.test)