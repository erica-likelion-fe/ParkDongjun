import { useState } from 'react';

export const Create = ({ onCreateMenu }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return; // 제목이 비어있으면 제출하지 않음
        onCreateMenu(title.trim()); // 부모 컴포넌트에 제목 전달
        setTitle(''); // 입력 필드 초기화
    }

    return (
        <form className="panel" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <textarea placeholder="내용을 입력하세요"></textarea>
            </div>
            <button type="submit">저장</button>
        </form>
    )
}