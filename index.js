class Formatter {
  //add static methods here
  static capitalize (s){
    return s.charAt(0).toUpperCase() + s.slice(1);
    
  }
  static sanitize (s){
    return s.replace(/[^a-z0-9+ /'-]+/gi, '');
  }

  static titleize (s){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let sa = s.split(" ")
    for(let i=0 ; i<arr.length ; i++){
      
      for (let j = 0; j<sa.length;j++){
        if(sa[j] !== arr[i]){
          this.capitalize(sa[j])
          console.log(arr[i])
          // console.log(sa[j])
        }
      }
    }
    return sa.join("")
  }
}
  //   return s.replace(/\b[^of,the]+/gi, function(l){ 
  //     console.log(l) 
  //     return l.charAt(0).toUpperCase() + l.slice(1)  })
  // }

