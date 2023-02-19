import { useState } from 'react'
import './styles/theme.css'
import './App.css'
import Paper from './components/Paper'

import Base1 from './templates/old/pro/Base1'
import MBase1 from './templates/old/modern/MBase1'
import MBase2 from './templates/old/modern/MBase2'
import MBase3 from './templates/old/modern/MBase3'
import MBase4 from './templates/old/modern/MBase4'
import TemplateM from './templates/M'
import TemplateN from './templates/N'
import TemplateO from './templates/O'
import TemplateP from './templates/P'
import TemplateQ from './templates/Q'
import TemplateR from './templates/R'
import TemplateS from './templates/S'
import TemplateT from './templates/T'
import TemplateU from './templates/U'
import { dummyProfile } from './templates/dummy'
import { templateList } from '../../constant/templateData'

const jsxComponents = {
  A: (profile) => <Base1 templateId='A' profile={profile} />,
  B: (profile) => <Base1 templateId='B' profile={profile} />,
  C: (profile) => <Base1 templateId='C' profile={profile} />,
  D: (profile) => <Base1 templateId='D' profile={profile} />,
  E: (profile) => <Base1 templateId='E' profile={profile} />,
  F: (profile) => <MBase1 templateId='F' profile={profile} />,
  G: (profile) => <MBase1 templateId='G' profile={profile} />,
  H: (profile) => <MBase2 templateId='H' profile={profile} />,
  I: (profile) => <MBase3 templateId='I' profile={profile} />,
  J: (profile) => <MBase4 templateId='J' profile={profile} />,
  M: (profile) => <TemplateM templateId='M' profile={profile} />,
  N: (profile) => <TemplateN templateId='N' profile={profile} />,
  O: (profile) => <TemplateO templateId='O' profile={profile} />,
  P: (profile) => <TemplateP templateId='P' profile={profile} />,
  Q: (profile) => <TemplateQ templateId='Q' profile={profile} />,
  R: (profile) => <TemplateR templateId='R' profile={profile} />,
  S: (profile) => <TemplateS templateId='S' profile={profile} />,
  T: (profile) => <TemplateT templateId='T' profile={profile} />,
  U: (profile) => <TemplateU templateId='U' profile={profile} />,
}

function App() {
  const [curPageIdx, setCurPageIdx] = useState(parseInt(window.location.hash.substring(1)) || 0)
  const templateIds = Object.keys(jsxComponents)
  const curTemplateId = templateIds[curPageIdx]
  const selectedComponent = jsxComponents[curTemplateId](dummyProfile)
  const themeData = templateList.all.find((t) => t.id == curTemplateId)

  const changePage = (newVal) => {
    if (newVal == -1 && curPageIdx == 0) return
    if (newVal == 1 && curPageIdx == templateIds.length - 1) return

    setCurPageIdx((v) => {
      window.location.replace(`#${v + newVal}`)
      return v + newVal
    })
  }

  const [curThemeIdx, setCurThemeIdx] = useState(0)
  const changeTheme = (e) => {
    setCurThemeIdx(e.target.value)
  }

  return (
    <div className='App_jsx'>
      <Paper
        pageIndex={curPageIdx}
        changePage={changePage}
        pageId={templateIds[curPageIdx]}
        lastPageIndex={templateIds.length - 1}
        curThemeIdx={curThemeIdx}
        themes={themeData.themes}
        onThemeUpdate={changeTheme}
      >
        {selectedComponent}
      </Paper>
    </div>
  )
}

export default App
