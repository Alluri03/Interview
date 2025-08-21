import React, { useEffect, useMemo, useRef, useState } from 'react'
import { fetchUsers } from './api'

/**
 * YOUR TASK (15–20 min):
 * 1) Implement debounced search (300ms) on 'name' across the fetched user list.
 * 2) Implement client-side pagination (page size = 5) with Prev/Next buttons.
 * 3) Highlight matching search text inside the name (case-insensitive).
 *
 * You may edit any code in this file. Tests in App.test.jsx will verify basics.
 */

const PAGE_SIZE = 5;

export default function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // TODO(1): Debounce the raw input by 300ms before applying it to filter.
  const [debounced, setDebounced] = useState('');
  useEffect(() => {
    // IMPLEMENT: setDebounced after 300ms when `search` changes; cleanup timer.
    const t = setTimeout(()=> setDebounced(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    fetchUsers().then(setAllUsers);
  }, []);

  // Apply filter
  const filtered = useMemo(() => {
    if (!debounced) return allUsers;
    const q = debounced.toLowerCase();
    return allUsers.filter(u => u.name.toLowerCase().includes(q));
  }, [allUsers, debounced]);

  // TODO(2): Implement pagination with page size 5.
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const start = (pageSafe - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    // Reset to page 1 whenever filter changes
    setPage(1);
  }, [debounced]);

  // TODO(3): Highlight matching text in name.
  function HighlightName({ name }) {
    if (!debounced) return <>{name}</>;
    const q = debounced;
    const idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return <>{name}</>;
    const before = name.slice(0, idx);
    const match = name.slice(idx, idx + q.length);
    const after = name.slice(idx + q.length);
    return <>{before}<mark data-testid="hl">{match}</mark>{after}</>;
  }

  return (
    <div style={{fontFamily:'Inter, system-ui', maxWidth: 640, margin:'40px auto'}}>
      <h1>Users</h1>
      <input
        placeholder="Search by name…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="search"
        style={{padding:8, width:'100%', boxSizing:'border-box'}}
      />
      <p style={{opacity:0.7, fontSize:12}}>Showing {current.length} of {filtered.length} (page {pageSafe}/{totalPages})</p>

      <ul>
        {current.map(u => (
          <li key={u.id} style={{padding:'6px 0', borderBottom:'1px solid #eee'}}>
            <strong><HighlightName name={u.name} /></strong>
            <div style={{opacity:0.7}}>{u.email}</div>
          </li>
        ))}
      </ul>

      <div style={{display:'flex', gap:8, marginTop:12}}>
        <button onClick={()=> setPage(p => Math.max(1, p-1))} disabled={pageSafe===1}>Prev</button>
        <button onClick={()=> setPage(p => Math.min(totalPages, p+1))} disabled={pageSafe===totalPages}>Next</button>
      </div>
    </div>
  )
}
