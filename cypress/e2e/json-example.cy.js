describe('JSON Object ', () => {

    it('Interacting with JSON Object ', () => {


        const users = {
            "firstName": "Stefan",
            "lastName": "Sakovic",
            "age": 30,
            "Students": [

                {
                    "firstName": "Milos",
                    "lastName": "Petrovic"
                },
                {
                    "firstName": "Stefan",
                    "lastName": "Kocic"

                }
            ]

        }
        for (let i = 0; i < users.Students.length; i++) {

            cy.log(users.Students[i].firstName)
            
        }

    })



})