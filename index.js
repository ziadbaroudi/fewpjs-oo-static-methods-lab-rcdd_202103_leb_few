class Formatter {
  //add static methods here
  static capitalize (s){
    return s.charAt(0).toUpperCase() + s.slice(1);
    
  }
  static sanitize (s){
    return s.replace(/[^a-z0-9+ /'-]+/gi, '');
  }

  static titleize (s){
    return s.replace(/\b\w[^aanbutandforatbyfromtheof]+/gi, function(l){ return l.charAt(0).toUpperCase() + l.slice(1) })
  }
}



