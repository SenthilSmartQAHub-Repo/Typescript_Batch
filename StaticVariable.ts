

// Static variable-> Declared using static

// you donot need to create an object to access this variable
// Accessed using the className, not the object
// static using in variables and functions --> static members
//static members are not allowed to call using object
class Company
{

    static companyName:string="SenthilSmartQAHub"

    static getCompanyName()
    {
        return Company.companyName;
    }
}

console.log(Company.companyName)
console.log(Company.getCompanyName())
