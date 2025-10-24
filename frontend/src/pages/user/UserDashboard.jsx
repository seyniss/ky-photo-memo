import React, { useState } from 'react'
import FileList from './FileList'
import UploadForm from './UploadForm'
import "./style/UserDashboard.scss"
const UserDashboard = () => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  //팝업 배경 클릭 닫기
  const handleBackdropClick = (e) => {
    setOpen(false)
  }

  return (
    <section>
      <div className="inner">
        <div className="search-wrap">
          <input
            type="text"
            placeholder='검색어를 입력해주세요'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button
            className='btn primary'
            onClick={() => setOpen(true)}
          >업로드</button>
        </div>
      </div>
      <div className="inner">
        {open && (
          <div
            className='popup-backdrop'
            onClick={handleBackdropClick}
          >
            <UploadForm
              open={open}
              onClose={() => setOpen(false)}
              onPanelClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        <FileList />

      </div>
    </section>
  )
}

export default UserDashboard