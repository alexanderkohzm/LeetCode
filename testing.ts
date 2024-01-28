text - overflow: ellipsis

Abcdefghijklmnopqrstuvwxyz
  | abcdefghijklmn…|


| abcdefgh…vwxyz |

  Import { }

Function getPixelWidth(str) {
   Return int
}

Function MidEllipsis({ text }) {

  // the size of the parent component 
  // There must be some way to access the CSS properties of the parent component
  // getParentWidth() 

  const currentRef = useRef()
  currentNode = currentRef.current
  currentNode.clientWidth

  const getParentWIdth = (currentNode) => {
    Const parentNode = currentNode.parentElement
    const parentNodeStyleWidth = parentNode.style.width
    return parentNodeStyleWidth
  }


  // we need some way to calculate the length of the text 
  // and its relation to the length of the “MidEllipsis” 
  // This is solved with getPixelWidth 

  // Function to convert the text into a string with ellipsis in the middle
  // this function should take in the result of getPixelWidth 
  //  first section of th string (abcdefg) 
  // middle section of the string (...)
  // and then there is the end section of the string (wxyz) 

  // pixelWIdth of the component 
  // stringA + … + stringB == pixelWidth of the Component 
  // how do i get stringA? Convert stringA to “abcdef” 
  // width = 100px; 

  const createEllipsesString = (string: string, parentWidth: number) => {
	Const lengthOfStringInPixels = getPixelWidth(string);

    // first base case -> lengthOfStringInPixels < parentWidth
    If(lengthOfStringInPixels <= parentWIdth) {
      return <StyledText>{ string } < /StyledText>
    }

    // if not, then we need to perform the conversion 

    const splitString = string.split(“”)
    const widthOfEllipses = getPixelWidth(“...”)

Let prefixString = “”
Let postfixString = “”
    // double check if Math.floor logic is fine later
    const lengthOfPrefixAndPostFix = Math.floor((parendWidth - widthOfEllipses) / 2)


    let stringALength = lengthofPrefixAndPostFix
    let stringBLength = lengthofPrefixAndPostFix

    While(stringALength) {
	Const characterToUse = splitString.shift()
	Const lengthOfStringToUse = getPixelWidth(characterToUse)
      stringALength = stringALength - lengthOfStringToUse
      prefixString += stringToUse
      // if we ever go to stringALength is negative then we could exceed the allocated width for stringA 	
    }

    // stringB
    While(stringBLength) {
	Const stringToUse = splitString.pop()
      // z
      // xyz
      postfixString = `${stringToUse}${postFixString}`
    }

Const modifiedString = `${prefixString}...${postfixString}`


    return <StyledText>{ string } < /StyledText>
  }




  return
  <div ref={ currentRef }> { createEllipsesString(...) } < /div>
}


<div>
  </td>
  < MidEllipsis  text =”abcdefghijklmnopqrstuvwxyz” />
