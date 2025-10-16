let score=85
switch (true)
{
    case (score>=90):
        console.log("Scored Grade A")
    break;
    case (score>=80 && score<89):
            console.log("Scored Grade B")
        break;
    case (score>=70 && score<79):
        console.log("Scored Grade C")
        break;
        case (score>60 && score<69):
          console.log("Scored Grade D")
        break;
        case (score<60):
            console.log("Scored Grade F")
        break;
}