describe('1) Loading Test', () => {
  it('Check page loads in correctly', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})


		cy.url().should('include', '/main_code/main.html') 
	        // checking URL path

    
  })
})

describe('2) Navigation Bar Title', () => {
  it('On title click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Easy Peasy Tracker').click()
	        // clicking element

		cy.url().should('include', '/main_code/main.html')
	      // checking URL path

    
  })
})

describe('3) Navigation Bar Home', () => {
  it('On home click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Home').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('4) Navigation Bar Profile', () => {
  it('On button click, should go to Profile.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Profile').click()
		cy.url().should('include', '/main_code/profile.html')
    
  })
})

describe('5) Navigation Bar Tracking', () => {
  it('On button click, should go to track.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		cy.contains('Track').click()
		cy.url().should('include', '/main_code/track.html')
    
  })
})

describe('6) Navigation Bar Settings', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Settings').click()
		cy.url().should('include', '/main_code/settings.html')
    
  })
})



describe('7) Lets Go button', () => {
  it('checks button takes user to profile html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
	
		cy.get('[id=profile-shortcut]').click({force: true})
		cy.url().should('include', '/main_code/profile.html')
    
  })
})


describe('8)Water Element Works', () => {
  it('checks the button increments the value', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
				cy.contains('Add').click({force: true})
	  				//must force true as element hides button
				cy.get('[class=water-card-text]').contains('0')
				

	
		
    
  })
})



describe('9)Water Element Works', () => {
  it('checks that the script decrements the value', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
				cy.contains('Take').click({force: true})
				cy.get('[class=water-card-text]').contains('250ml')
				

	
		
    
  })
})


describe('12) Edit Details view', () => {
  it('checks button can be pushed', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
				cy.contains('Edit Details').click({force: true})
        
				
				
				

	
		
   
  })
})

describe('13) Edit Details modal view', () => {
  it('checks edit modal exists ', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
				cy.contains('Edit Details').click({force: true})
				cy.get('[id=editModal]').contains('Change Details')
          
		   })
})

        
describe('14) Fill Form', () => {
  it('Checks the form can be filled in', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Edit Details').click({force: true})
				cy.get('[id=editModal]').contains('Change Details')
				cy.get('[id=first-name').type('Hello') // Type 'Hello, World' into the 'input'
				cy.get('[id=middle-name').type('This') 
				cy.get('[id=last-name').type('Is') 
				cy.get('[id=gender-assign').type('A')
				cy.get('[id=age').type('Test')
				cy.contains('Save changes').click({force: true})


          
		   })
})

describe('15) Fill Form Update Data', () => {
  it('Check that the form saves cookies', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Edit Details').click({force: true})
				cy.get('[id=editModal]').contains('Change Details')
				cy.get('[id=first-name').type('Hello') // Type 'Hello, World' into the 'input'
				cy.get('[id=middle-name').type('This') 
				cy.get('[id=last-name').type('Is') 
				cy.get('[id=gender-assign').type('A')
				cy.get('[id=age').type('Test')
				cy.contains('Save changes').click({force: true})
				//This test fills out a form and then 
        //checks the data has been updated into the list on the main page
				cy.contains('Hello Is')


          
		   })
})

describe('16) Check Card Creation Exists', () => {
  it('Checks that the button creates the card', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Create New Symptom Tracker').click({force: true})
				
				
				cy.contains('You have had this for undefined days.')


          
		   })
})

describe('17) Check Card Creation Modal Exists', () => {
  it('Checks for modal creation', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Create New Symptom Tracker').click({force: true})
				cy.contains('How are you feeling?')


          
		   })
})

describe('18) Check Card Creation Modal Submits', () => {
  it('Checks submission by recognising next modal', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Create New Symptom Tracker').click({force: true})
				cy.contains('How are you feeling?')
				cy.contains('Next').click({force:true})
				cy.contains('How would you describe your cough?')


          
		   })
})




describe('19) Check Card Creation Modal Closes', () => {
  it('We want this test to fail', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
				cy.contains('Create New Symptom Tracker').click({force: true})
				cy.contains('How are you feeling?')
				cy.contains('Next').click({force:true})
				cy.contains('How would you describe your cough?')
				cy.contains('Save').click({force:true})
				cy.get('How would you describe your cough?')
	})
          
		   
})

describe('20) Loading Test', () => {
  it('Check page loads in correctly', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
    })
    cy.url().should('include', '/main_code/profile.html')
  })
})


describe('21) Navigation Bar Title', () => {
  it('On title click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Easy Peasy Tracker').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('22) Navigation Bar Home', () => {
  it('On home click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Home').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('23) Navigation Bar Profile', () => {
  it('On button click, should go to Profile.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Profile').click()
		cy.url().should('include', '/main_code/profile.html')
    
  })
})

describe('24) Navigation Bar Settings', () => {
  it('On button click, should go to track.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Track').click()
		cy.url().should('include', '/main_code/track.html')
    
  })
})

describe('25) Navigation Bar Settings', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/profile.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Settings').click()
		cy.url().should('include', '/main_code/settings.html')
    
  })
})

describe('26) Loading Test', () => {
  it('Check page loads in correctly', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		

		cy.url().should('include', '/main_code/track.html')

    
  })
})

describe('27) Navigation Bar Title', () => {
  it('On title click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Easy Peasy Tracker').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('28) Navigation Bar Home', () => {
  it('On home click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/main.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Home').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('29) Navigation Bar Profile', () => {
  it('On button click, should go to Profile.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Profile').click()
		cy.url().should('include', '/main_code/profile.html')
    
  })
})

describe('30) Navigation Bar Track', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Track').click()
		cy.url().should('include', '/main_code/track.html')
    
  })
})

describe('31) Navigation Bar Settings', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/track.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Settings').click()
		cy.url().should('include', '/main_code/settings.html')
    
  })
})

describe('32) Loading Test', () => {
  it('Check page loads in correctly', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})

		cy.url().should('include', '/main_code/settings.html')
    
  })
})

describe('33) Navigation Bar Title', () => {
  it('On title click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Easy Peasy Tracker').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('34) Navigation Bar Home', () => {
  it('On home click, should refresh page', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Home').click()

		cy.url().should('include', '/main_code/main.html')

    
  })
})

describe('35) Navigation Bar Profile', () => {
  it('On button click, should go to Profile.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Profile').click()
		cy.url().should('include', '/main_code/profile.html')
    
  })
})

describe('36) Navigation Bar Tracking', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Tracking').click()
		cy.url().should('include', '/main_code/track.html')
    
  })
})

describe('37) Navigation Bar Settings', () => {
  it('On button click, should go to settings.html', () => {
    cy.visit('https://5500-cb1140-easypeasytracker-2kt6enmtrdb.ws-eu45.gitpod.io/main_code/settings.html')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // due to website being hosted on Gitpod ports
  return false
		})
		
		cy.contains('Settings').click()
		cy.url().should('include', '/main_code/settings.html')
    
  })
})
