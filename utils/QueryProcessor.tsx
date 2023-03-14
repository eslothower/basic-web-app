export default function QueryProcessor(query: string): string {
  if (query.includes("What is \d+ plus \d+?")) {
    var match = query.match(/^What is ([0-9]*)*plus*([0-9]*)\?*$/);
    return (
      match[1] + match[2];
    );
  } else if (query.includes("Which of the following numbers is the largest: \d+, \d+, \d+?")){
    return 1;
  }

  return "error";
}
