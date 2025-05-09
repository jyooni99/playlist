import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  return (
    <header>
      <nav className='w-full fixed top-0 bg-white z-10'>
        <div className='w-full flex justify-between items-center py-5 px-5'>
          {/* 로고 */}
          <div>
            <Link to='/' className='font-bold text-xl'>
              PlayList
            </Link>
          </div>

          {/* 검색창 */}
          <div className='w-1/2 hidden min-[480px]:flex min-[480px]:relative'>
            <input
              type='text'
              className='w-full placeholder:text-gray-400 placeholder:font-bold placeholder:text-sm border border-gray-400 pl-4 pr-20 py-1.5 rounded-full overflow-hidden focus:outline-1 focus:outline-black'
              placeholder='검색어를 입력하세요'
            />
            <button className='absolute right-0 px-5 h-full cursor-pointer border-l-1 border-gray-400'>
              검색
            </button>
          </div>
          <div>
            <div>
              <button
                onClick={handleClick}
                className='cursor-pointer border bg-black text-white py-1.5 px-4 rounded-full font-bold '
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
