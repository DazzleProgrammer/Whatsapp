// rfce
import React, { useState , useEffect } from 'react';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
// import  db  from "./firebase";


function Sidebar() {

  const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //  db.collection('rooms').onSnapshot(snapshot=>(
  //   setRooms(
  //     snapshot.docs.map((doc) => 
  //   ({
  //      id: doc.id,
  //      data: doc.data(),
  //   }))
  //   )
  //  ))
  // }, [])
  

  return (
    
    <div className='sidebar'>
      <div className="sidebar__header">
       <Avatar />

       <div className="sidebar__headerRight">
        <IconButton>
        <DonutLargeIcon />
        </IconButton>

        <IconButton>
        <ChatIcon />
        </IconButton>
        
        <IconButton>
        <MoreVertIcon />
        </IconButton>
        
       </div>
      </div>

      
      <div className="sidebar__search">
      <div className='sidebar__searchContainer'>
      <SearchOutlinedIcon />
      <input  type='text' placeholder='Start new chat '/>
      </div>
      </div>

      <div className="sidebar__chats">
        
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
       
        {/* {rooms.map((room) =>(
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))} */}
    
      </div>
    </div>
    
  )
}

export default Sidebar;
