const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''
    let count = 0
    
    let encodedSymbol = ''
    for(i of expr){
        encodedSymbol +=i
        count++
        if(count != 0 && count % 10 === 0){
            count = 0

            let twoDigit = ''
            let morse = ''
            for(let j = 0; j < 10; j++){
                if(encodedSymbol[j] == '*'){
                    result +=' '
                    break
                }
                if([2,4,6,8].includes(j)){
                    twoDigit = ''
                    twoDigit +=encodedSymbol[j]
                } else {
                    twoDigit +=encodedSymbol[j]
                    if(twoDigit.length == 2){
                        if(twoDigit == '10'){
                            morse +='.'
                        }else if(twoDigit == '11'){
                            morse +='-'
                        }
                    }
                    
                }
             
            }
            if(morse){
                result +=MORSE_TABLE[morse]
                morse = ''
            }
            encodedSymbol = ''

        }
    }
    return result
}

module.exports = {
    decode
}