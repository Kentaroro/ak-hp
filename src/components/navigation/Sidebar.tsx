import { useState, useEffect } from 'react'
import { navigation, sns } from '../../data/navigation'
import logo from '../../assets/logo.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // モバイルメニューが開いているときは body をスクロールロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* モバイル用ハンバーガーボタン */}
      <button
        type="button"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-[#82D7D2] rounded-full shadow-md"
      >
        <span
          className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>

      {/* モバイル用オーバーレイ */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* サイドバー本体 */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[330px] bg-[#82D7D2] text-white z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col px-10 py-12">
          {/* ロゴ */}
          <div className="mb-12">
            <a href="#home" onClick={handleNavClick} className="block">
              <img
                src={logo}
                alt="ABANDONED GIRLS' SCHOOL"
                width={500}
                height={168}
                className="w-full h-auto max-w-[250px]"
              />
            </a>
          </div>

          {/* ナビゲーション */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block md:text-lg text-sm uppercase hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SNS */}
          <ul className="flex items-center gap-4 mt-8">
            {sns.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
