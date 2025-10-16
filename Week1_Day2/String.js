let string="madam"
let char=string.split("")
let reversestring=""

for(let i=char.length-1;i>=0;i-- )
{
    reversestring += char[i]

}
if(reversestring===string)
{
    console.log("The string is Palindrome")
}
else
    console.log("The string is not a palindrome")