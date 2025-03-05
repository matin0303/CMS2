import React, { useEffect, useState } from 'react'
import Errorbox from '../Errorbox/Errorbox'
import Detailmodal from '../Detailmodal/Detailmodal'
import Deletemodal from '../Deletemodal/Deletemodal'
import Editemodal from '../Editemodal/Editemodal'

export default function Comments() {
  const [showCommentDetailModal, setShowCommentDetailModal] = useState(false)
  const [showCommentDeleteModal, setShowCommentDeleteModal] = useState(false)
  const [showCommentEditeModal, setShowCommentEditeModal] = useState(false)
  const [commentDetail, setCommentDetail] = useState('')
  const [commentID, setCommentID] = useState(null)
  const [commentBody, setCommentBody] = useState('')

  const [allComments, setAllComments] = useState([])

  const getALlComment = ()=>{
    fetch('http://localhost:8000/api/comments')
      .then(res => res.json())
      .then((comments) => setAllComments(comments))
  }
  useEffect(() => {
    getALlComment()
  }, [])


  function openCommentDetailModal(){
    document.getElementById('modalparent').style.visibility = "visible";
    setShowCommentDetailModal(true)
  }
  function closeCommentDetailModal(){
    setShowCommentDetailModal(false)
  }

  function openCommentDeleteModal(){
    document.getElementById('modalparent').style.visibility = "visible";
    setShowCommentDeleteModal(true)
  }
  function closeCommentDeleteModal(){
    setShowCommentDetailModal(false)
  }
  function deleteComment(){
    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method :'DELETE'
    }).then(res => res.json())
    .then(result =>{
      setShowCommentDeleteModal(false);
      getALlComment()
    })
  }

  function openCommentEdieModal(){
    document.getElementById('modalparent').style.visibility = "visible";
    setShowCommentEditeModal(true)
  }
  function closeCommentEditeModal(){
    setShowCommentEditeModal(false)
  }
  function submitCommentEdite(){
    fetch(`http://localhost:8000/api/comments/${commentID}`,{
      method :'PUT',
      headers :{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        body:commentBody,
      })
    }).then(res => res.json())
    .then(result =>{
      setShowCommentEditeModal(false);
      getALlComment();
    })
  }
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      {allComments.length ? (
        <table className='w-full text-center'>
          <thead className=''>
            <tr>
              <th>نام کاربر</th>
              <th>محصول</th>
              <th>متن</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {
              allComments.map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.userID}</td>
                  <td> {comment.productID}</td>
                  <td><button onClick={()=>{
                    openCommentDetailModal();
                    setCommentDetail(comment.body);
              
                  }} className='felx justify-center text-[0.9rem] px-1.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>دیدن متن</button></td>
                  <td>{comment.date}</td>
                  <td>{comment.hour}</td>
                  <td>
                    <button onClick={()=>{
                      openCommentDeleteModal();
                      setCommentID(comment.id)
                    }} className='felx justify-center text-[0.9rem] px-1.5 mx-0.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'>حذف </button>
                    <button onClick={()=>{
                      openCommentEdieModal();
                      setCommentBody(comment.body);
                      setCommentID(comment.id)
                    }} className='felx justify-center text-[0.9rem] px-1.5 mx-0.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'> ویرایش</button>
                    <button className='felx justify-center text-[0.9rem] px-1.5 mx-0.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'> پاسخ </button>
                    <button className='felx justify-center text-[0.9rem] px-1.5 mx-0.5 items-center bg-blue-custom rounded-[0.5rem] shadow-xl text-white cursor-pointer'> تایید</button>
                  </td>
                </tr>
              ))              
            }
          </tbody>
        </table>

      ) : (<Errorbox msg="هیچ کامنتی یافت نشد" />)}
      {showCommentDetailModal && <Detailmodal close={closeCommentDetailModal}>{commentDetail}</Detailmodal>}
      {showCommentDeleteModal && <Deletemodal close={closeCommentDeleteModal} deleteSubmit = {deleteComment}/>}
      {showCommentEditeModal && <Editemodal close={closeCommentEditeModal} onSubmit={submitCommentEdite}>
      <div className='flex justify-center items-center w-full'>
        <textarea
         className='border-2 border-solid border-black w-full'
         value={commentBody}
         onChange={(e)=>{setCommentBody(e.target.value)}}>
        </textarea>
      </div>
      </Editemodal>}

    </div>
  )
}

