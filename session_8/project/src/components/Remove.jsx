import React, { useState } from 'react';
import './Remove.css';

export const Remove = ({ onRemoveMenu }) => {
    const [title, setTitle] = useState('');

    const handleRemove = (e) => {
        e.preventDefault();
        if (title.trim() === '') return; // 제목이 비어있으면 제출하지 않음
        onRemoveMenu(title.trim()); // 부모 컴포넌트에 제목 전달
        setTitle(''); // 입력 필드 초기화
    }

    return (
        <form className="panel" onSubmit={handleRemove}>
            <div className="remove-row">
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit" className="remove">지우기</button>
            </div>
        </form>
    )
}