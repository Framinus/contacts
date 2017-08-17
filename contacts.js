const contactStorage = []; // here is where you'll store your contacts

// addContact function should check if the firstName, lastName & email addresses are strings
// if they are not strings, the function should throw an error. addContact only gets called inside
// of addContacts!
function addContact(firstName, lastName, email) {
  contactStorage.push({ fullName: firstName + ' ' + lastName, email });
}

function addContacts(contacts) {
  console.log('Loading contact data...');
  for (let i = 0; i < contacts.length; i += 1) {
    addContact(contacts[i].first_name, contacts[i].last_name, contacts[i].email);
  }
  console.log('... Finished loading contact data.');
}

function printContacts() {
  // sort function to alphabetize the contacts by full name.
  contactStorage.sort((a, b) => {
    const nameA = a.fullName;
    const nameB = b.fullName;
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } return 0;
  });
  // for spacing purposes, i want to create a variable that calculates the length
  // of the longest name.
  // then I want to measure each word against it, and add that amount of space
  // to the end of each word.
  const nameLength = 20;
  const emailLength = 30;

  function createSpaces(maxWidth, currentName) {
    // subtract the currentName from maxWidth
    const space = maxWidth - currentName;
    // create a string that is the # of spaces and return it.
    const spaceStr = ' '.repeat(space);
    return spaceStr;
  }
  // now that I've found the length of the longest name, I want to alter my console statement
  // so that it prints out each name plus the amount of spaces needed to reach that number.
  console.log('|---------------------------------------------------------|');
  console.log(`|    ${'Full Name'}          |        ${'Email'}                    |`);
  console.log('|---------------------------------------------------------|');
  for (let i = 0; i < contactStorage.length; i += 1) {
    console.log(`| ${contactStorage[i].fullName} ${createSpaces(nameLength, contactStorage[i].fullName.length)} | ${contactStorage[i].email} ${createSpaces(emailLength, contactStorage[i].email.length)} |`);
  }
  console.log('|---------------------------------------------------------|');
}
////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": "Tanny",
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": "Tova",
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
  },
  {
    "first_name": "Engracia",
    "last_name": "Folger",
    "email": "efolger2@epa.gov",
  },
  {
    "first_name": "Conroy",
    "last_name": "Honsch",
    "email": "chonsch3@sohu.com",
  },
  {
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": "vcankett4@washington.edu",
  },
  {
    "first_name": "Mateo",
    "last_name": "Da Costa",
    "email": "mdacosta5@about.com",
  },
  {
    "first_name": "Ambrose",
    "last_name": "Scullard",
    "email": "ascullard6@timesonline.co.uk",
  },
  {
    "first_name": "Shaylah",
    "last_name": "Fairney",
    "email": "sfairney7@stumbleupon.com",
  },
  {
    "first_name": "Pier",
    "last_name": "Waine",
    "email": "pwaine8@unc.edu",
  },
  {
    "first_name": "Karita",
    "last_name": "Bough",
    "email": "kbough9@angelfire.com",
  },
  {
    "first_name": "Marguerite",
    "last_name": "Lafayette",
    "email": "mlafayettea@bravesites.com",
  },
  {
    "first_name": "Northrop",
    "last_name": "Bauchop",
    "email": "nbauchopb@pagesperso-orange.fr",
  },
  {
    "first_name": "Devon",
    "last_name": "Bocking",
    "email": "dbockingc@comcast.net",
  },
  {
    "first_name": "Willdon",
    "last_name": "Hedley",
    "email": "whedleyd@purevolume.com",
  },
  {
    "first_name": "Charil",
    "last_name": "Clegg",
    "email": "cclegge@weibo.com",
  },
  {
    "first_name": "Nessi",
    "last_name": "Bywaters",
    "email": "nbywatersf@shop-pro.jp",
  },
  {
    "first_name": "Mercy",
    "last_name": "Browncey",
    "email": "mbrownceyg@yelp.com",
  },
  {
    "first_name": "Didi",
    "last_name": "Grose",
    "email": "dgroseh@google.com.hk",
  },
  {
    "first_name": "Niccolo",
    "last_name": "Spruce",
    "email": "nsprucei@wordpress.com",
  },
  {
    "first_name": "Winston",
    "last_name": "Hixley",
    "email": "whixleyj@homestead.com",
  },
])

printContacts()
