export default function QueryProcessor(query: string): string {
  if (query.includes("What is")) {
    var match = query.match( /^What is \d+ plus \d+\?$/);
    return (String(match[0] + match[1]));
  } else if (query.includes("Which of the following numbers is the largest: \d+, \d+, \d+?")){
    var match = query.match(/Which of the following numbers is the largest: ([0-9]*), ([0-9]*), ([0-9]*)?/);
    return (String(Math.max(Number(match[1]), Number(match[2]), Number(match[3]))));
  } else if(query.includes()){

  }

  return "no";
}
