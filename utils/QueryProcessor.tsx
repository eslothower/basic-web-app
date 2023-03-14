export default function QueryProcessor(query: string): string {
  if (query.includes("What is your name?")) {
    return (
      "Eli and Frank"
    );
  }

  return "error";
}
