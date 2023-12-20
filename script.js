const flashcards = {
    HTML:[
      { term: 'HTML', meaning: 'HyperText Markup Language' },
      { term: 'Tag', meaning: 'An HTML element used to define different types of content or structure in a document.' },
      { term: 'Attribute', meaning: 'Extra information added to an HTML tag to provide more details about an element.' },
      { term: 'Ordered list element', meaning: 'Specifies the enclosing list elements as numbered.' },
      { term: 'List element', meaning: 'The browser will automatically number multiple list items.' },
      { term: '<b> tag', meaning: 'Defines bold text.' },
      { term: '<i> tag', meaning: 'Defines italic text.' },
      { term: '<strong> tag', meaning: 'Defines important text.' },
      { term: '<header> tag', meaning: 'Defines a header for a document or a section.' },
      { term: '<section> tag', meaning: 'Defines a section in a document.' },
      { term: '<form> element', meaning: 'Is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.' },
      { term: 'Radio Buttons', meaning: 'Radio buttons let a user select ONE of a limited number of choices.' },
      { term: 'Checkboxes', meaning: 'Checkboxes let a user select ZERO or MORE options of a limited number of choices.' }
    ],
    CSS: [
      { term: 'Selector', meaning: 'Identifies the HTML element that needs to be styled.' },
      { term: 'Background-color attribute', meaning: 'Defines the color of an element\'s background.' },
      { term: 'Background-image attribute', meaning: 'Specifies an image to be used as an element\'s backdrop.' },
      { term: 'Border-style attribute', meaning: 'Determines the type of border that will be shown.' },
      { term: 'Border-color attribute', meaning: 'The color of the four borders is controlled by the border-color attribute.' },
      { term: 'Border-radius attribute', meaning: 'Used to give an element rounded borders.' },
      { term: 'Border', meaning: 'Sets all the border properties in one declaration.' },
      { term: 'Border-Width', meaning: 'Sets the width of the four borders.' },
      { term: 'CSS margin attributes', meaning: 'Used to create space around components.' },
      { term: 'Auto', meaning: 'The browser calculates the margin.' }
    ],
    JavaScript: [
      { term: 'innerHTML', meaning: 'The document can be used by JavaScript to access an HTML element.' },
      { term: 'Document.write()', meaning: 'For testing purposes, it is convenient to use document.write().' },
      { term: 'Window.alert()', meaning: 'You can use an alert box to display data.' },
      { term: 'console.log()', meaning: 'For debugging purposes, you can call the console.log() method in the browser to display data.' },
      { term: 'Break', meaning: 'Terminates a switch or a loop.' },
      { term: 'Continue', meaning: 'Jump out of a loop and start at the top.' },
      { term: 'Return', meaning: 'Exit a function.' },
      { term: 'JavaScript keywords', meaning: 'Reserved words that cannot be used as names for variables.' },
      { term: 'The JavaScript syntax', meaning: 'A collection of principles that describe how JavaScript applications are built.' }
    ]
  };
  
  
  let currentCard = 0;
  let selectedCategory = '';
  
  function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Replace these credentials with your desired username and password
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('categories').style.display = 'block';
    } else {
      alert('Invalid username or password.');
    }
  }
  
  function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('categories').style.display = 'none';
    document.getElementById('flashcard').style.display = 'block';
    displayCard();
  }
  
  function displayCard() {
    const currentTerm = document.getElementById('term');
    const currentMeaning = document.getElementById('meaning');
  
    currentTerm.textContent = flashcards[selectedCategory][currentCard].term;
    currentMeaning.textContent = flashcards[selectedCategory][currentCard].meaning;
  }
  
  function nextCard() {
    currentCard = (currentCard + 1) % flashcards[selectedCategory].length;
    displayCard();
  }
  
  // Add the goBack function
  function goBack() {
    document.getElementById('flashcard').style.display = 'none';
    document.getElementById('categories').style.display = 'block';
  }


  