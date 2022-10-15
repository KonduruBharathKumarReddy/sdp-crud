const ROLE = {
    ADMIN: 'admin',
    FAC:'fac',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Bharath', role: ROLE.ADMIN },
      { id: 2, name: 'Madhav', role: ROLE.FAC },
      { id: 3, name: 'Malli', role: ROLE.BASIC }
    ],
    profiles: [
      { id: 1, name: "Bharath Profile", userId: 1, height:190, weight:60, phno:7013272285 },
      { id: 2, name: "Madhav Profile", userId: 2,height:170, weight:69,phno:9988776655 },
      { id: 3, name: "Malli Profile", userId: 3 ,height:165, weight:80,phno:767189872}
    ]

  }