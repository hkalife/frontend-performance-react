import '../App.css'
import React from 'react';
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

interface Props {
  numberOfRowsToRender: number,
}

const PeopleList: React.FC<Props> = (props) => {
  const mockPeopleData = (): {
    id: string
    prefix: string
    fullName: string
    gender: string
    jobArea: string
    birthdate: string
  }[] => {
    const dataArray = []
    
    for (let i = 0; i < props.numberOfRowsToRender; i++) {
      const gender = faker.person.sexType();
      dataArray.push({
        id: faker.database.mongodbObjectId(),
        prefix: faker.person.prefix(gender),
        fullName: faker.person.fullName({ sex: gender }),
        gender,
        jobArea: faker.person.jobArea(),
        birthdate: format(faker.date.birthdate(), 'dd/MM/yyyy')
      })
    }
  
    return dataArray
  }


  return (
    <>
      <h3>People</h3>

      <table id="shared-table" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Prefix</th>
            <th>Full name</th>
            <th>Gender</th>
            <th>Job Area</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {mockPeopleData().map((person) =>
            <tr key={person.id}>
              <td>{ person.id }</td>
              <td>{ person.prefix }</td>
              <td>{ person.fullName }</td>
              <td>{ person.gender }</td>
              <td>{ person.jobArea }</td>
              <td>{ person.birthdate }</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default PeopleList
