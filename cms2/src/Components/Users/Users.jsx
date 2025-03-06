import React, { useEffect, useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import Deletemodal from '../Deletemodal/Deletemodal'
export default function Users() {
  const [allUsers, setAllUsers] = useState([])
  const [userID, setUserID] = useState(null)
  const [showUserDeleteModal, setShowUserDeleteModal] = useState(false)

  const getUsers = () => {
    fetch('http://localhost:8000/api/users', {
      method: "GET",
    }).then(res => res.json())
      .then(result => setAllUsers(result))
  }

  useEffect(() => {
    getUsers();
  }, [])

  function openUserDeleteModal(){
    document.getElementById('modalparent').style.visibility = "visible";
    setShowUserDeleteModal(true)
  }
  function closeUserDeleteModal(){
    setShowUserDeleteModal(false)
  }
  const deleteUser =  ()=>{
    console.log("User removed")
    // fetch(`http://localhost:8000/api/users/${userID}`, {
    //   method: 'DELETE'
    // }).then(res => res.json())
    //   .then(result => {
    //     setShowUserDeleteModal(false);
    //     getUsers()
    //   })
  }
  return (

    <div className='w-full flex justify-center items-center flex-col'>
      {allUsers.length ? (
        <>
          <h1 className='mb-4'>لیست کاربران</h1>
          <table className='w-full text-center'>
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>نام کاربری</th>
                <th>رمزعبور</th>
                <th>شماره تماس</th>
                <th>ایمیل</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.firstname}{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => {
                      openUserDeleteModal();
                      setUserID(user.id)
                    }} className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>حدف</button>
                    <button className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>جزئیات</button>
                    <button className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (<Errorbox msg="هیچ کاربری یافت نشد" />)}

      {showUserDeleteModal && <Deletemodal close={closeUserDeleteModal} deleteSubmit={deleteUser} title={'ایا از حذف کاربر اطمینان دارید؟'} />}
    </div>
  )
}
