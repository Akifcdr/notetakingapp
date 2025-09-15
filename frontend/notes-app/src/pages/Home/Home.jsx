import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/cards/NoteCard'
const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="container-mx-auto">
        <NoteCard
          title="Meeting on 27th Jan"
          date="27th Jan, 2024"
          content="Meeting on 27th Jan Meeting on 27th Jan"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  )
}

export default Home
