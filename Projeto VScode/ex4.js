// Array de deuses do Smite (exemplo)
const gods = [
    { name: "Achilles", features: ["Strong", "Warrior"], role: "Solo", pantheon: "Greek" },
    { name: "Agni", features: ["Fire", "Mage"], role: "Mid", pantheon: "Hindu" },
    { name: "Thor", features: ["Thunder", "Warrior"], role: "Jungle", pantheon: "Norse" },
    { name: "Neith", features: ["Weaver", "Hunter"], role: "ADC", pantheon: "Egyptian" },
    { name: "Ra", features: ["Sun", "Mage"], role: "Mid", pantheon: "Egyptian" }
  ];
  
  // Q1. Imprimir o nome e a quantidade de features de todos os deuses usando uma única linha de código.
  function printNameAndFeatures(gods) {
    for (let god of gods) {
      console.log(`${god.name} - ${god.features.length} features`);
    }
  }
  
  // Q2. Imprimir todos os deuses que possuem o papel de "Mid"
  function filterByRole(gods, role) {
    let midGods = [];
    for (let god of gods) {
      if (god.role === role) {
        midGods.push(god.name);
      }
    }
    return midGods;
  }
  
  // Q3. Organizar a lista pelo panteão do deus.
  function sortByPantheon(gods) {
    gods.sort((a, b) => {
      if (a.pantheon < b.pantheon) return -1;
      if (a.pantheon > b.pantheon) return 1;
      return 0;
    });
  
    let sortedNames = [];
    for (let god of gods) {
      sortedNames.push(god.name);
    }
    return sortedNames;
  }
  
  // Q4. Retornar um novo array com o nome de cada deus e entre parênteses a sua classe.
  function formatGods(gods) {
    let formattedGods = [];
    for (let god of gods) {
      formattedGods.push(`${god.name} (${god.features.join(", ")})`);
    }
    return formattedGods;
  }
  
  // Testando as funções
  
  console.log("Q1:");
  printNameAndFeatures(gods);
  
  console.log("\nQ2:");
  const midGods = filterByRole(gods, "Mid");
  console.log(midGods);
  
  console.log("\nQ3:");
  const sortedByPantheon = sortByPantheon(gods);
  console.log(sortedByPantheon);
  
  console.log("\nQ4:");
  const formatted = formatGods(gods);
  console.log(formatted);
  