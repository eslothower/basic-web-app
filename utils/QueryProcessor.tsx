export default function QueryProcessor(query: string): string {
  console.log("THIS IS CHICKEN");

  if (query.match(/^What is ([0-9]*) plus ([0-9]*)\?$/)) {
    var match = query.match(/\d+/g);
    if (match != null){
      return (String(Number(match[0]) + Number(match[1])));
    }
    
  } else if (query.match(/^What is ([0-9]*) minus ([0-9]*)\?$/)) {
    var match = query.match(/\d+/g);
    if (match != null){
      return (String(Number(match[0]) - Number(match[1])));
    }
    
  } else if (query.match(/^What is ([0-9]*) multiply by ([0-9]*)\?$/)) {
    var match = query.match(/\d+/g);
    if (match != null){
      return (String(Number(match[0]) * Number(match[1])));
    }
    
  }
  //  else if (query.includes("Which of the following numbers is the largest: \d+, \d+, \d+?")){
  //   var match = query.match(/\d+/g);    
  //   return (String(Math.max(Number(match[0]), Number(match[1]), Number(match[2]))));
  // }
  return "moose";
}
