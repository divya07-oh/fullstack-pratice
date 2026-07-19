let lunches = [];

function addLunchToEnd(array, lunch) {
  array.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, lunch) {
  array.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }

  const removedLunch = array.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return array;
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }

  const removedLunch = array.shift();
  console.log(`${removedLunch} removed from the start of the lunch menu.`);
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(`Randomly selected lunch: ${array[randomIndex]}`);
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${array.join(", ")}`);
}
