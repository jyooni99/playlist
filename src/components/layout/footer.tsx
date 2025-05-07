const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='flex justify-between items-center px-10'>
        {/* 연락처 및 저작권 정보*/}
        <div className='text-sm'>
          <div className='mb-4'>
            <h5 className='font-bold text-md mb-2'>연락처</h5>
            <p>전화: +82 10-2456-3897</p>
            <p>이메일: berry3891@naver.com</p>
          </div>
          <p className='text-gray-500'>&copy; 2025 JYooni99. All rights reserved.</p>
        </div>

        {/* SNS */}
        <div className='flex text-sm gap-5'>
          <h5 className='font-bold text-md mb-2'>포트폴리오</h5>
          <a
            href='https://goldenrod-scallop-ad5.notion.site/study-center-ef92c048eb2c4dcb9409713c1c75ba7d'
            target='_blank'
          >
            노션
          </a>
          <a href='https://github.com/jyooni99' target='_blank'>
            깃허브
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
