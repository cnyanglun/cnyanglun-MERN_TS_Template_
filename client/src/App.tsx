import React, { useEffect, useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg('请求失败'))
  }, [])

  return (
    <div>
      <h1>你好，React 18 + TypeScript！</h1>
      <p>后端消息：{msg}</p>
    </div>
  )
}
