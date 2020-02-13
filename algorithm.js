var sum=0,flag=0,num=0;
function input(n)
{
    if(n<0)
        flag=n*-1;
    else if(flag==0)
    {
        sum=sum*10+n;
        document.getElementById("sum").innerHTML=String(sum);
    }
    else
    {
        num=num*10+n;
        document.getElementById("sum").innerHTML=String(num);
    }
}
function solve()
{
    switch (flag)
    {
        case 1:
            sum+=num;
            break;
        case 2:
            sum-=num;
            break;
        case 3:
            sum*=num;
            break;
        case 4:
            sum/=num;
            break;
    }
    document.getElementById("sum").innerHTML=String(sum);
    num=0;
}