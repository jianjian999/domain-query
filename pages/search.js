import { useState } from 'react';
import styles from '../style/index.css';

export default function Search() {
  function formatDateTime(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  const [domain, setDomain] = useState('');
  const [suffix, setSuffix] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async(event) => {
    console.log("search begin....")
    console.log(domain)
    console.log(suffix)
    event.preventDefault();
    console.log("after prevent")
    // 这里将添加域名查询逻辑
      console.log("search start")
      event.preventDefault();
      const response = await fetch(`/api/?name=${domain}&suffix=${suffix}`);
      const data = await response.json();
      console.log(data)
      setResult(data);
    
    
  };

  return (
    <div >
      <div className='header'>
      <img src="/images/logo.jpg" alt="Vercel Logo" className="logo" />
      <h1>域名查询</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="输入域名进行查询"
        />
        <input
          type="text"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          placeholder="输入后缀进行查询"
        />
        <button type="submit">Search</button>
      </form>
      <div>
      {result && result.status === "ok" && (
        <div>
        <h2>查询结果:</h2>
        <p>域名: {result.domain}</p>
        <p>是否可用: {result.available ? '是' : '否'}</p>
        <p>创建日期: {formatDateTime(result.creation_datetime)}</p>
        <p>到期日期: {formatDateTime(result.expiry_datetime)}</p>
        </div>
      )}
       
      </div>
      
    </div>
  );



}
