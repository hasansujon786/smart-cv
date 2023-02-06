import { arrow } from './Icons'
import Button from './Button'

const Paper = ({ children, curThemeIdx, ...otherProps }) => {
  return (
    <div className='flex bg-gray-300 min-h-screen'>
      <div className='flex-1'></div>
      {/* papaer-wrapper */}
      <div className='flex items-center justify-center'>
        <section id={`theme-${curThemeIdx}`} className='paper p-2 shadow-2xl bg-white'>
          <div className='overflow-hidden'>{children}</div>
        </section>
      </div>
      <div className='flex-1 pt-8 md:pl-10'>
        <Controlls {...otherProps} />
      </div>
    </div>
  )
}

function Controlls({ changePage, onThemeUpdate, themes, pageIndex, lastPageIndex, pageId }) {
  return (
    <section className='hidden md:inline-block'>
      <div>
        <div className=''>
          <p className='font-bold text-gray-400 opacity-60 text-5xl'>{pageId}</p>
        </div>

        <div className='flex space-x-3 mt-2'>
          <Button icon={arrow.left} onClick={() => changePage(-1)} disabled={pageIndex == 0} />
          <Button icon={arrow.right} onClick={() => changePage(1)} disabled={pageIndex == lastPageIndex} />
        </div>

        <div className='flex space-x-3 mt-4'>
          <label htmlFor='custom-theme-color' style={{ '--theme': 'var(--custom-color)' }}>
            <input
              className='hidden peer'
              id='custom-theme-color'
              type='radio'
              name='theme-index'
              value='custom'
              onChange={onThemeUpdate}
              style={{ backgroundColor: 'var(--theme)' }}
            />
            <div
              className='h-4 w-4 peer-checked:ring ring-offset-gray-200 ring-offset-2 rounded-full cursor-pointer'
              style={{ backgroundColor: 'var(--theme)', '--tw-ring-color': 'var(--theme)' }}
            />
          </label>
          {themes.map((themeColor, idx) => (
            <label htmlFor={themeColor} key={themeColor}>
              <input
                className='hidden peer'
                id={themeColor}
                defaultChecked={idx == 0}
                key={themeColor}
                type='radio'
                name='theme-index'
                value={idx}
                onChange={onThemeUpdate}
                style={{ backgroundColor: themeColor }}
              />
              <div
                className='h-4 w-4 peer-checked:ring ring-offset-gray-200 ring-offset-2 rounded-full cursor-pointer'
                style={{ backgroundColor: themeColor, '--tw-ring-color': themeColor }}
              />
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Paper
