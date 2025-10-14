// Donation counts
let mealCount = 0;
let treeCount = 0;
let waterCount = 0;
let bookCount = 0;
let clothesCount = 0;
let medicalCount = 0;
let animalMealCount = 0;

// Costs
const MEAL_COST = 50;
const TREE_COST = 200;
const WATER_COST = 20;
const BOOK_COST = 150;
const CLOTHES_COST = 250;
const MEDICAL_COST = 500;
const ANIMAL_MEAL_COST = 100;

// DOM elements
const mealInput = document.getElementById('meal');
const treeInput = document.getElementById('tree');
const waterInput = document.getElementById('water');
const bookInput = document.getElementById('book');
const clothesInput = document.getElementById('clothes');
const medicalInput = document.getElementById('medical');
const animalMealInput = document.getElementById('animalMeal');

const totalDisplay = document.getElementById('total');

const mealVisual = document.getElementById('mealVisual');
const treeVisual = document.getElementById('treeVisual');
const waterVisual = document.getElementById('waterVisual');
const bookVisual = document.getElementById('bookVisual');
const clothesVisual = document.getElementById('clothesVisual');
const medicalVisual = document.getElementById('medicalVisual');
const animalMealVisual = document.getElementById('animalMealVisual');

const addMealBtn = document.getElementById('addMeal');
const addTreeBtn = document.getElementById('addTree');
const addWaterBtn = document.getElementById('addWater');
const addBookBtn = document.getElementById('addBook');
const addClothesBtn = document.getElementById('addClothes');
const addMedicalBtn = document.getElementById('addMedical');
const addAnimalMealBtn = document.getElementById('addAnimalMeal');
const resetBtn = document.getElementById('reset');

// Update donation total and visuals
function updateDonation() {
    const total = (mealCount*MEAL_COST) + (treeCount*TREE_COST) + 
                  (waterCount*WATER_COST) + (bookCount*BOOK_COST) +
                  (clothesCount*CLOTHES_COST) + (medicalCount*MEDICAL_COST) +
                  (animalMealCount*ANIMAL_MEAL_COST);
    
    totalDisplay.textContent = `₹${total}`;

    mealVisual.textContent = mealCount;
    treeVisual.textContent = treeCount;
    waterVisual.textContent = waterCount;
    bookVisual.textContent = bookCount;
    clothesVisual.textContent = clothesCount;
    medicalVisual.textContent = medicalCount;
    animalMealVisual.textContent = animalMealCount;
}

// Input event listeners
mealInput.addEventListener('input', () => { mealCount = parseInt(mealInput.value)||0; updateDonation(); });
treeInput.addEventListener('input', () => { treeCount = parseInt(treeInput.value)||0; updateDonation(); });
waterInput.addEventListener('input', () => { waterCount = parseInt(waterInput.value)||0; updateDonation(); });
bookInput.addEventListener('input', () => { bookCount = parseInt(bookInput.value)||0; updateDonation(); });
clothesInput.addEventListener('input', () => { clothesCount = parseInt(clothesInput.value)||0; updateDonation(); });
medicalInput.addEventListener('input', () => { medicalCount = parseInt(medicalInput.value)||0; updateDonation(); });
animalMealInput.addEventListener('input', () => { animalMealCount = parseInt(animalMealInput.value)||0; updateDonation(); });

// Button event listeners
addMealBtn.addEventListener('click', () => { mealCount++; mealInput.value=mealCount; updateDonation(); });
addTreeBtn.addEventListener('click', () => { treeCount++; treeInput.value=treeCount; updateDonation(); });
addWaterBtn.addEventListener('click', () => { waterCount++; waterInput.value=waterCount; updateDonation(); });
addBookBtn.addEventListener('click', () => { bookCount++; bookInput.value=bookCount; updateDonation(); });
addClothesBtn.addEventListener('click', () => { clothesCount++; clothesInput.value=clothesCount; updateDonation(); });
addMedicalBtn.addEventListener('click', () => { medicalCount++; medicalInput.value=medicalCount; updateDonation(); });
addAnimalMealBtn.addEventListener('click', () => { animalMealCount++; animalMealInput.value=animalMealCount; updateDonation(); });

// Reset
resetBtn.addEventListener('click', () => {
    mealCount = treeCount = waterCount = bookCount = clothesCount = medicalCount = animalMealCount = 0;
    mealInput.value = treeInput.value = waterInput.value = bookInput.value = clothesInput.value = medicalInput.value = animalMealInput.value = 0;
    updateDonation();
});

// Initial update
updateDonation();
