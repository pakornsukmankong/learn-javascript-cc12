const truncate = (str,length) => {
  if (str.length > length) {
    let modifyString = str.slice(0, length-1) + "..."
    
    return modifyString
  } else {
    return str
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20))