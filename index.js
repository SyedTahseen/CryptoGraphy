var submit = document.getElementById("submit")
var plaintext = document.getElementById("plainText")
var key = document.getElementById("select")
var cryp = document.getElementById("cryp")
var choose = document.getElementById("choose")
var invalid = document.getElementById("invalid")
var alphabets = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
var temp="";
var tem;

function shiftCypherEn(plainText,key){
    var inte;
     key = parseInt(key.value,10)
   for(var i=0;i<plainText.length;i++)
   {
               
                tem = alphabets.indexOf(plainText[i])
                tem = tem + key
               
               tem = tem % 26

               if(tem < 0)
               {
                   tem+= 26
               }
               temp+= alphabets[tem]
    //    inte= plainText.value.charCodeAt([i])
    //    inte=inte+key;
    //    temp+=  String.fromCharCode(inte)

   }
   
    document.getElementById("cypher").innerHTML = "Your encrypted code is <strong> " + temp + " </strong>";
    temp="";
   

}

function shiftCypherDe(plainText,key)
{
    var inte;
    key = parseInt(key.value,10)
    for(var i=0;i<plainText.length;i++)
    {
                 tem = alphabets.indexOf(plainText[i])
                 
                 tem = tem - key
                tem = tem % 26
                 
                if(tem < 0)
                {
                    tem+= 26
                }
                temp+= alphabets[tem]
    }
   document.getElementById("cypher").innerHTML = "Your decrypted code is <strong> " + temp + " </strong>";
   temp="";
}

function vigCypherEn(plainText,key){
    //tem = parseInt(key.value,10)
    var num;
    if(key.value <= 0 || key.value >=0)
    {
        for(var i=0;i<key.value.length;i++)
        {
            num = parseInt(key.value[i],10)
                    tem = alphabets.indexOf(plainText[i])
                    
                    tem = tem + num
                    
                    tem = tem % 26
                    if(tem < 0)
                    {
                        tem+= 26
                    }
                    temp+= alphabets[tem]
        }
    }
    else
    {
        for(var i=0;i<key.value.length;i++)
        {
          num = alphabets.indexOf(key.value[i])
          tem = alphabets.indexOf(plainText[i])
                    
                    tem = tem + num
                    
                    tem = tem % 26
                    if(tem < 0)
                    {
                        tem+= 26
                    }
                    temp+= alphabets[tem]
        }
    }
    document.getElementById("cypher").innerHTML = "Your encrypted code is <strong> " + temp + " </strong>";
    temp="";
}


function vigCypherDe(plainText,key){
    //tem = parseInt(key.value,10)
    var num;
    if(key.value <= 0 || key.value >=0)
    {
        for(var i=0;i<key.value.length;i++)
        {
            num = parseInt(key.value[i],10)
                    tem = alphabets.indexOf(plainText[i])
                    
                    tem = tem - num
                    
                    tem = tem % 26
                    if(tem < 0)
                    {
                        tem+= 26
                    }
                    temp+= alphabets[tem] 
            }   
    }
    else
    {
        for(var i=0;i<key.value.length;i++)
        {
          num = alphabets.indexOf(key.value[i])
          tem = alphabets.indexOf(plainText[i])
                    
                    tem = tem - num
                    
                    tem = tem % 26
                    if(tem < 0)
                    {
                        tem+= 26
                    }
                    temp+= alphabets[tem]
        }
    }
    document.getElementById("cypher").innerHTML = "Your decrypted code is <strong> " + temp + " </strong>";
    temp="";
}

function playFairEnDe(plainText,key,cryp){
    var keyMatrix = new Array(5);
    var enc="";
    for(var i=0;i<5;i++){
        keyMatrix[i] = new Array(5);
    }
    var count = 0;
    for(var i=0;i<5;i++){
        for(var j =0;j<5;j++){
            if(count != key.value.length)
            {
                if(key.value[count] != "j")
                {
                    if(find(keyMatrix,key.value[count])){
                        keyMatrix[i][j] = key.value[count];
                    }
                    else
                    {
                        j=j-1
                    }
                    
                   
                }
                else
                {
                    j=j-1 
                }
               count++;
           }       
            else
            {
                for(var k=0;k<alphabets.length;k++)
                {

                    if(alphabets[k] == "j")
                    {
                        k++;
                    }
                    var value = find(keyMatrix,alphabets[k])
                    if(value == true)
                    {
                        keyMatrix[i][j] = alphabets[k]
                        break;
                    }
                   
                }
              
            }
            
        }
    }
    console.log(keyMatrix)
    var pair="";
    var j=0;
    for(var i=0;i<plainText.length;i++){
        pair+=plainText[i]
        
       if(i%2!=0)
       {
            if(pair[j]==pair[j+1])
            {
                
                var temp="";
                temp = pair[j] + 'x';
                console.log(temp)
                 enc += checkMatrix(keyMatrix,temp,cryp)
                console.log(enc)
                pair="";
                pair=plainText[i]
                j=0
            }
            else
            {
               console.log(pair)
                 enc += checkMatrix(keyMatrix,pair,cryp)
                pair="";
                console.log(enc)
            }
       }
       if(i==plainText.length-1 && pair!= "")
       {
           console.log(pair)
           pair+= 'x';
            enc += checkMatrix(keyMatrix,pair,cryp)
            pair="";
            console.log(enc)
       }
      // console.log(pair)
    }
    document.getElementById("cypher").innerHTML = "Your Encrypted code is <strong> " + enc + " </strong>";
}

function find(keyMatrix,check)
{
  for(var i=0;i<5;i++){
    for(var j =0;j<5;j++){
            if(keyMatrix[i][j]==check)
            {
                return false
            }
            if(keyMatrix[i][j] == null)
            {
                return true
            }
         }
    }
}

function checkMatrix(keyMatrix,temp,cryp)
{
 for(var i=0;i<temp.length;i++)
 {
     for(var j=0;j<5;j++)
     {
      
         for(var k=0;k<5;k++)
         {
          
            if(keyMatrix[j][k]==temp[i])
            {
               if(i==1)
               {
                var checkCol2 = k;
                var checkRow2 = j;
                var tempRow2 = checkRow2
                var tempRow1 = checkRow1
                var tempCol1,tempCol2;
                if(checkRow1 == checkRow2 && cryp == "Encryption")
                {
                    
                    var enc="";
                    if(checkCol1<4)
                    {
                        tempCol1 = checkCol1;
                        tempCol1++;
                        enc+=keyMatrix[checkRow1][tempCol1]

                    }
                    else
                    {
                        enc+=keyMatrix[checkRow1][0]
                    }
                    if(checkCol2<4)
                    {
                        tempCol2 = checkCol2;
                        tempCol2++;
                        enc+=keyMatrix[checkRow2][tempCol2]
                    }
                    else
                    {
                        enc+=keyMatrix[checkRow2][0]
                    }
                    return enc
                }
                else if(checkRow1 == checkRow2 && cryp == "Decryption")
                {
                    var enc="";
                    if(checkCol1>0)
                    {
                        tempCol1 = checkCol1;
                        tempCol1--;
                        enc+=keyMatrix[checkRow1][tempCol1]

                    }
                    else
                    {
                        enc+=keyMatrix[checkRow1][4]
                    }
                    if(checkCol2>0)
                    {
                        tempCol2 = checkCol2;
                        tempCol2--;
                        enc+=keyMatrix[checkRow2][tempCol2]
                    }
                    else
                    {
                        enc+=keyMatrix[checkRow2][4]
                    }
                    return enc
                }
                else if(checkCol1 == checkCol2 && cryp == "Encryption")
                {
                    var enc="";
                    if(checkRow1<4)
                    {
                      tempRow1++;
                      enc+=keyMatrix[tempRow1][checkCol1]
                    }
                    else
                    {
                        
                        enc+=keyMatrix[0][checkCol1]
                    }
                    if(checkRow2<4)
                    {
                      tempRow2++;
                      enc+=keyMatrix[tempRow2][checkCol2]
                    }
                    else
                    {
                    
                        enc+=keyMatrix[0][checkCol2]
                    }
                    return enc

                }
                else if(checkCol1 == checkCol2 && cryp == "Decryption")
                {
                    var enc="";
                    if(checkRow1>0)
                    {
                        
                      tempRow1--;
                      enc+=keyMatrix[tempRow1][checkCol1]
                    }
                    else
                    {
                       
                        enc+=keyMatrix[4][checkCol1]
                    }
                    if(checkRow2>0)
                    {
                        
                      tempRow2--;
                      enc+=keyMatrix[tempRow2][checkCol2]
                    }
                    else
                    {
                        
                        enc+=keyMatrix[4][checkCol2]
                    }
                    return enc

                }
                else
                {
                    while(tempRow2 > checkRow1 && tempRow2 != checkRow1)
                    {
                       
                        tempRow2--;
                    }
                    while(tempRow2 < checkRow1 && tempRow2 != checkRow1)
                    {
                       
                        tempRow2++;
                    }
                   var enc="";
                   enc+= keyMatrix[tempRow2][checkCol2];
                    while(tempRow1 > checkRow2 && tempRow1 != checkRow2)
                    {
                       
                        tempRow1--;
                    }
                    while(tempRow1 < checkRow2 && tempRow1 != checkRow2)
                    {
                        
                        tempRow1++;
                    }
                    enc+=keyMatrix[tempRow1][checkCol1];
                    return enc

                }
               }
               else
               {
                   var checkCol1 = k;
                   var checkRow1 = j
               }
            }
         }
     }
 }   
}

submit.addEventListener("click",function(e){
   var plainText = plaintext.value.toLowerCase();
    key.value = key.value.toLowerCase()
   if(choose.value == "Shift")
   {
       if(key.value <=0 || key.value >= 0)
       {
            if(cryp.value == "Encryption")
            {
                shiftCypherEn(plainText,key); 
            }
            else
            {
                shiftCypherDe(plainText,key);
            }
      }
      else
      {
        invalid.innerHTML = "<strong> Invalid </strong> Your key should be in characters";
        document.getElementById("cypher").innerHTML = "";
      }
    }
    else if(choose.value == "Vigenere")
    {
        if(key.value.length == plainText.length)
        {

            invalid.innerHTML = "";
            if(cryp.value == "Encryption")
            {
                vigCypherEn(plainText,key); 
            }
            else
            {
                vigCypherDe(plainText,key);
            }
        }
        else
        {
            invalid.innerHTML = "Your key is <strong> Invalid </strong>. Enter key of every character..";
            document.getElementById("cypher").innerHTML = "";
        }
    }
    else if(choose.value == "PlayFair"){
            if(key.value >= "a" && key.value <="z")
            {
                invalid.innerHTML = "";
           
                playFairEnDe(plainText,key,cryp.value)
            }
        else
        {
            
                invalid.innerHTML = "Your key is <strong> Invalid </strong>. key should be in characters..";
                document.getElementById("cypher").innerHTML = "";
        }
    }
    // else if(choose.value == "Subsitution")
    // {

    // }
});
