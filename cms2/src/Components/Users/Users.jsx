import React, { useEffect, useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import Deletemodal from '../Deletemodal/Deletemodal'
import Editemodal from '../Editemodal/Editemodal'
import { SiNamecheap } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { TbNumber123 } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import Detailmodal from '../Detailmodal/Detailmodal';




export default function Users() {
  const [allUsers, setAllUsers] = useState([])
  const [userID, setUserID] = useState(null)
  const [showUserDeleteModal, setShowUserDeleteModal] = useState(false)
  const [showUserEditeModal, setShowUserEditeModal] = useState(false)
  const [showUserDetailModal, setShowUserDetailModal] = useState(false)


  const [userFirstname, setUserFirstname] = useState('')
  const [userLastname, setUserLastname] = useState('')
  const [userUsername, setUserUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userScore, setUserScore] = useState('')
  const [userBuy, setUserBuy] = useState('')









  const getUsers = () => {
    fetch('http://localhost:8000/api/users', {
      method: "GET",
    }).then(res => res.json())
      .then(result => setAllUsers(result))
  }

  useEffect(() => {
    getUsers();
  }, [])

  function openUserDeleteModal() {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowUserDeleteModal(true)
  }
  function closeUserDeleteModal() {
    setShowUserDeleteModal(false)
  }
  const deleteUser = () => {
    console.log("User removed")
    // fetch(`http://localhost:8000/api/users/${userID}`, {
    //   method: 'DELETE'
    // }).then(res => res.json())
    //   .then(result => {
    //     setShowUserDeleteModal(false);
    //     getUsers()
    //   })
  }

  function openUserEditeModal() {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowUserEditeModal(true)
  }
  function closeUserEditeModal() {
    setShowUserEditeModal(false)
  }
  function submitUserEdite() {
    const userNewInfo = {
      firsname : userFirstname,
      lastname :  userLastname,
      username : userUsername,
      password : userPassword,
      phone : userPassword,
      city : userCity,
      email : userEmail,
      address : userAddress,
      score : userScore,
      buy : userBuy
        }
    fetch(`http://localhost:8000/api/users/${userID}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'Application/json',
      },
      body : JSON.stringify(userNewInfo),
    }).then(res=>res.json())
    .then(result => {
      setShowUserDetailModal(false);
      getUsers();
    })
  }

  function openUserDetailModal() {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowUserDetailModal(true)
  }
  function closeUserDetailModal() {
    setShowUserDetailModal(false)
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
                  <td>{user.firsname} {user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => {
                      openUserDeleteModal();
                      setUserID(user.id)
                    }} className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>حدف</button>
                    <button onClick={() => {
                      openUserEditeModal();
                      setUserID(user.id)
                      setUserFirstname(user.firsname);
                      setUserLastname(user.lastname);
                      setUserUsername(user.username);
                      setUserPassword(user.password);
                      setUserPhoneNumber(user.phone);
                      setUserEmail(user.email);
                      setUserCity(user.city);
                      setUserAddress(user.address);
                      setUserScore(user.score);
                      setUserBuy(user.buy);
                    }} className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>ویرایش</button>
                    <button onClick={()=>{
                      openUserDetailModal();
                      setUserFirstname(user.firsname);
                      setUserLastname(user.lastname);
                      setUserUsername(user.username);
                      setUserPassword(user.password);
                      setUserPhoneNumber(user.phone);
                      setUserEmail(user.email);
                      setUserCity(user.city);
                      setUserAddress(user.address);
                      setUserScore(user.score);
                      setUserBuy(user.buy);
                    }} className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>جزئیات</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (<Errorbox msg="هیچ کاربری یافت نشد" />)}

      {showUserDeleteModal && <Deletemodal close={closeUserDeleteModal} deleteSubmit={deleteUser} title={'ایا از حذف کاربر اطمینان دارید؟'} />}
      {showUserEditeModal &&
        <Editemodal close={closeUserEditeModal} onSubmit={submitUserEdite}>
          <div className='w-2/3'>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <SiNamecheap className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='نام'
                value={userFirstname}
                onChange={e => setUserFirstname(e.target.value)} />
            </div>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <SiNamecheap className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='نام خانوادگی'
                value={userLastname}
                onChange={e => setUserLastname(e.target.value)} />
            </div>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <FaUserCheck className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='نام کاربری'
                value={userUsername}
                onChange={e => setUserUsername(e.target.value)} />
            </div>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <MdOutlinePassword className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='رمزعبور'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)} />
            </div>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <TbNumber123 className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='شماره تماس'
                value={userPhoneNumber}
                onChange={e => setUserPhoneNumber(e.target.value)} />
            </div>
            <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
              <MdAlternateEmail className='text-2xl' /> <input
                className='w-full  p-1 text-center outline-0 '
                type="text"
                placeholder='ایمیل'
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)} />
            </div>
          </div>
        </Editemodal>}
      {showUserDetailModal && <Detailmodal close={closeUserDetailModal}>
        <h3 className='mb-4 text-black'>جزئیات کاربر</h3>
        <table className=' w-full border-2 border-solid border-black'>
          <tr className='text-center border-b-2 border-solid border-black'>
            <th>نام و نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>رمزعبور</th>
            <th>شماره تماس</th>
            <th>ایمیل</th>
            <th>شهر</th>
            <th>ادرس</th>
            <th>امتیاز</th>
            <th>خرید</th>
          </tr>
          <tr className='text-center'>
            <td>{userFirstname} {userLastname}</td>
            <td>{userUsername}</td>
            <td>{userPassword}</td>
            <td> {userPhoneNumber}</td>
            <td>{userEmail}</td>
            <td>{userCity}</td>
            <td>{userAddress}</td>
            <td>{userScore}</td>
            <td>{userBuy}</td>
          </tr>
        </table>
      </Detailmodal>}
    </div>
  )
}
