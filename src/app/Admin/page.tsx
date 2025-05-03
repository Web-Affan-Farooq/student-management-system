"use client"
import React, { useContext} from 'react';
import { OptionContext } from '@/context/OptionContext';

// ___ importing component that carries all the childs
import Main from '@/components/Admin/main';

const Admin = () => {
  const [option, setOption] = useContext(OptionContext)
  return (
    <Main />
    )
}

export default Admin;