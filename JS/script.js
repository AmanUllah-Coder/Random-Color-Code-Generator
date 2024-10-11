// Function to generate random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to generate and update color
  function updateColor() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
  }
  
  // Function to copy color code to clipboard
  function copyToClipboard() {
    const color = colorCode.textContent;
    navigator.clipboard.writeText(color)
      .then(() => {
        alert(`Color code ${color} copied to clipboard!`);
      })
      .catch(() => {
        alert('Failed to copy the color code!');
      });
  }
  
  // Get the main app container
  const app = document.getElementById('app');
  
  // Create Title dynamically
  const title = document.createElement('h2');
  title.className = 'card-title text-center text-2xl font-bold';
  title.textContent = 'Random Color Code Generator';
  
  // Create Color Box dynamically
  const colorBoxContainer = document.createElement('div');
  colorBoxContainer.className = 'flex justify-center my-6';
  const colorBox = document.createElement('div');
  colorBox.id = 'colorBox';
  colorBox.className = 'h-32 w-32 rounded-lg border-4 border-gray-200';
  colorBoxContainer.appendChild(colorBox);
  
  // Create Color Code Display dynamically
  const colorCodeContainer = document.createElement('div');
  colorCodeContainer.className = 'text-center my-4';
  const colorCode = document.createElement('span');
  colorCode.id = 'colorCode';
  colorCode.className = 'text-lg font-mono font-bold';
  colorCodeContainer.appendChild(colorCode);
  
  // Create Button dynamically
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'card-actions justify-center';
  const button = document.createElement('button');
  button.id = 'generateBtn';
  button.className = 'btn btn-primary';
  button.textContent = 'Generate Color';
  buttonContainer.appendChild(button);
  
  // Create "Copy" Button dynamically
  const copyButton = document.createElement('button');
  copyButton.id = 'copyBtn';
  copyButton.className = 'btn btn-secondary ml-4';
  copyButton.textContent = 'Copy Color Code';
  buttonContainer.appendChild(copyButton);
  
  // Append elements to app container
  app.appendChild(title);
  app.appendChild(colorBoxContainer);
  app.appendChild(colorCodeContainer);
  app.appendChild(buttonContainer);
  
  // Add Event Listener for Generate Color button
  button.addEventListener('click', updateColor);
  
  // Add Event Listener for Copy button
  copyButton.addEventListener('click', copyToClipboard);
  
  // Initialize with a random color
  updateColor();
  