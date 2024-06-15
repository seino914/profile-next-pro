import React from 'react'
import { ListProfilesProps } from '../types'

const ListProfiles: React.FC<ListProfilesProps> = ({items}) => {
  return (
    <ul className="text-gray-700 text-base">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default ListProfiles
