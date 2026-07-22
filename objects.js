function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (manifest.unit === "lb") {
    normalizedManifest.weight = manifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = manifest.containerId === undefined ? "Missing" : "Invalid";
  }

  if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination =
      manifest.destination === undefined ? "Missing" : "Invalid";
  }

  if (
    typeof manifest.weight !== "number" ||
    !Number.isFinite(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = manifest.weight === undefined ? "Missing" : "Invalid";
  }

  if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = manifest.unit === undefined ? "Missing" : "Invalid";
  }

  if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = manifest.hazmat === undefined ? "Missing" : "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  if (Object.keys(validationErrors).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "Math",
    question: "What is 8 × 7?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language"
    ],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}